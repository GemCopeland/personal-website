// The Arena channel ID
const arenaChannelId = 479545;

// Required package
const Arena = require("are.na");

function getAllContent(channel, per, count) {
  async function getPageContent(page, acc) {
    // if we have gone past page 1 we are done here
    if (page === 0) { 
      return acc;
    }
    // fetch all the content for this page number
    const pageContents = await channel.contents({ per, page });
    // call this function again for the next page, combining the new content with the existing content
    return getPageContent(page - 1, [ ...pageContents, ...acc])
  }

  // get how many pages are used to hold all the content
  const numberOfPages = Math.ceil(count / per);

  // call recursive function starting on the last page, with a blank array
  return getPageContent(numberOfPages, []);
}

const getArenaChannels = async (channelId) => {
  // Set up the Arena instance
  const arena = new Arena();
  
  // Set up base URL
  const baseUrl = "https://are.na";

  // Set a per page pagination limit so that arena doesn't 404
  const per = 30;
  
  // Get the root arena channel
  const channel = arena.channel(channelId);

  // Get the user and the length of all content (channels and blocks) in the root channel
  const { length, user } = await channel.get();

  // Recursively get all page contents using pagination (see 'getAllContent' above)
  const channels = await getAllContent(channel, per, length);

  // Add the user to the base URL
  const userUrl = `${baseUrl}/${user.slug}/`;

  // Return an array containing only the channels contained in the root channel
  return Promise.all(channels
    // remove blocks 
    .filter(({ base_class }) => base_class === "Channel")
    // map over channels
    .map(async ({ id, title, metadata, length: count, slug }) => {
      // get new channel
      const newChannel = arena.channel(id);
      // get all content for this channel
      const content = await getAllContent(newChannel, per, length);
      // get thumbnail urls for image blocks in this channel
      const images = content
        .filter(b => !!b.image)
        .map(b => b.image.thumb.url);
      // get channel description (if present)
      const description = metadata && metadata.description;
      // get channel url
      const url = `${userUrl}${slug}`;
      // Return new channel object, somewhat reduced from the default
      return { count, description, images, title, url };
    }));
};

module.exports = getArenaChannels(arenaChannelId);

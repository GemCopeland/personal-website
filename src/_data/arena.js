// The Arena channel ID
const arenaChannelId = 839706;

// Required package
const Arena = require("are.na");

const getArenaChannels = async channelId => {
  // Set up the Arena instance
  const arena = new Arena();
  // Get the channel
  let rootChannel = arena.channel(channelId);
  // Set up base URL
  let url = "https://are.na/";
  // Set up number per page
  const per = 60;
  // Set up number of images per block
  const imgPerBlock = 30;
  // Get the channels
  let channels = rootChannel
    .get()
    .then(async channel => {
      // Add the user to the base URL
      url = url + channel.user.slug + "/";
      // Create a new array of channel contents
      let reducedChannels = await Promise.all(
        channel.contents
          .filter(block => block.base_class == "Channel")
          .map(async channel => {
            // Set up the new channel object, somewhat reduced from the default
            let newChannel = {
              title: channel.title,
              description: channel.metadata
                ? channel.metadata.description
                : null,
              images: [],
              count: channel.length,
              url: url + channel.slug
            };

            // Calculate the options based on the total pages
            // NOTE If we could pass `sort_by` and / or `direction` to the opts, we would not need to do this
            let totalPages = Math.ceil(channel.length / per);
            let opts = { per: per };
            // Loop through the pages backwards
            for (let i = totalPages; i > 0; i--) {
              // Stop looping through pages if we have enough images
              if (newChannel.images.length > imgPerBlock) {
                break;
              }
              // Set page to next
              opts.page = i;
              // Add some further content to the channel via its child blocks
              newChannel = await arena
                .channel(channel.id)
                .contents(opts) // NOTE We’re manually getting the contents because channel.contents sometimes returns null
                .then(contents => {
                  // Get images within channel contents
                  contents = contents
                    .filter(b => b.image)
                    .map(b => {
                      return b.image.thumb.url;
                    });
                  // Add contents to images array
                  newChannel.images = contents.concat(newChannel.images);
                  // Return the channel with the additional image and description content
                  return newChannel;
                });
            }
            newChannel.images = newChannel.images.reverse();

            // Return the formatted channel object
            return newChannel;
          })
      );
      return reducedChannels.reverse();
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  return await channels;
};

module.exports = getArenaChannels(arenaChannelId);

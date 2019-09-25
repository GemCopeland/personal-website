// TODO Make this an environment variable
// https://www.11ty.io/docs/data-js/#example%3A-exposing-environment-variables
const arenaChannelId = 479545;

// Required package
const Arena = require("are.na");

const getChannelImages = async arena => {
  return arena
    .channel(channel.id)
    .contents({ page: 1, per: 10 }) // NOTE We’re manually getting the contents because channel.contents sometimes returns null
    .then(contents => {
      // Get images within channel contents
      return contents
        .filter(b => b.image)
        .map(b => {
          return b.image.thumb.url;
        });
    });
};

const getArenaChannels = async channelId => {
  // Set up the Arena instance
  const arena = new Arena();
  // Get the channel
  let rootChannel = arena.channel(channelId);
  // Set up base URL
  let url = "https://are.na/";

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
              images: null,
              count: channel.length,
              url: url + channel.slug
            };
            // Add some further content to the channel via its child blocks
            newChannel = await arena
              .channel(channel.id)
              .contents() // NOTE We’re manually getting the contents because channel.contents sometimes returns null
              .then(contents => {
                // Get images within channel contents
                newChannel.images = contents
                  .filter(b => b.image)
                  .map(b => {
                    return b.image.thumb.url;
                  })
                  .reverse()
                  .slice(0, 10);

                // Get a description from the text blocks if necessary
                if (newChannel.description == null) {
                  let text = contents
                    .filter(b => {
                      return b.class == "Text";
                    })
                    .map(b => {
                      return b.content;
                    })
                    .join(" ")
                    .slice(0, 140);
                  newChannel.description = text ? text + "&hellip;" : null;
                }
                // Return the channel with the additional image and description content
                return newChannel;
              });

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

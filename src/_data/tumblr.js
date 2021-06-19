const tumblr = require('tumblr.js');
const client = tumblr.createClient({
  consumer_key: 'XWwZIEQ6h6sHP6P0SrC9O0gH121DzRA4KXdB76PjJW2V62ZiDQ',
  consumer_secret: 'rtQjXk5udu5cmLT2XeTIbPN0nFKIcExVISInxavXJLq2AD8qS1',
  token: 'kmZ29fmLUpElHvg1J9Abx5Yuy4dMdnZC9ikCvwX6VgiifA66PI',
  token_secret: '7t6TsKOjwECcZ9gKIzgTol37cE3Lvrup5gS226C2kZfLoxx6Sm'
});

client.userInfo(function(err, data) {
    data.user.blogs.forEach(function(blog) {
      console.log(blog.name);
    });
  });

  client.blogInfo('f618tp.tumblr.com', function (err, data) {
    console.log(blog.name);
    // ...
});
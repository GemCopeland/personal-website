const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");

const pluginRss = require("@11ty/eleventy-plugin-rss");

const now = new Date();

module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({ notify: true });
  eleventyConfig.setDataDeepMerge(false);
  eleventyConfig.setLiquidOptions({ strictFilters: false, dynamicPartials: false });


  // Add plugin
  eleventyConfig.addPlugin(pluginRss);

  // Add excerpts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- more -->",
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", (code) => {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", (original) => {
    const { error, code, warnings } = UglifyJS.minify(original);

    if (error) {
      console.log("UglifyJS error: ", error);
      return original;
    }

    if (warnings) {
      console.log("UglifyJS warnings: ", warnings);
    }
    
    return code;
  });

  // Date formatting
  eleventyConfig.addFilter("machineDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("activityDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("MM.yyyy");
  });
  eleventyConfig.addFilter("activityYear", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  eleventyConfig.addFilter("cleanUrl", (url) => {
    return url.replace(/^(https?:|)\/\//, "");
  });

  eleventyConfig.addFilter("debug", (obj) => {
    console.log('debug', obj);
    return `debug: ${obj?.toString() || obj}`
  }
  );

  // Add profile collection so that we can access this outside of homepage
  eleventyConfig.addCollection("profile", (collection) => {
    return collection.getFilteredByGlob('**/pages/home.md')[0];
  });

  // Create Posts collection
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob('**/posts/*.md')
      .filter((p) => p.date <= now)
      .reverse();
  });

  // Create activityCurrent collection
  eleventyConfig.addCollection("activityCurrent", (collection) => {
    return collection
      .getFilteredByGlob('**/activity/*.md')
      .filter((item) => item.data.dateEnd >= now)
      .reverse();
  });

  // Create activityPast collection
  eleventyConfig.addCollection("activityPast", (collection) => {
    return collection
      .getFilteredByGlob('**/activity/*.md')
      .filter((item) => item.data.dateEnd < now)
      .reverse();
  });

  // Markdown
  const markdownIt = require("markdown-it");
  const options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
    markdownIt(options).render(markdownString)
  );

  // Copy the fonts
  eleventyConfig.addPassthroughCopy({ "src/_includes/assets/fonts": "fonts" });

  // Copy the favicon contents
  eleventyConfig.addPassthroughCopy({ "src/_includes/assets/favicon": "/" });

  return {
    templateFormats: ["md", "njk", "html", "liquid", "woff", "woff2"],

    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_dist",
    },
  };
};

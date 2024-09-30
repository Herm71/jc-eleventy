const { DateTime } = require("luxon");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Passthrough Copy folders
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy({ "./src/assets/favicons": "/favicons" });
  eleventyConfig.addPassthroughCopy({
    "./src/assets/hidden": "/",
  });
	// Watch Folders
  eleventyConfig.addWatchTarget("./src/sass/");
  // Custom Plugins
  eleventyConfig.addPlugin(require("./config/eleventy.config.images.js"));

  // Official Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });
  // Filter to retrieve a random blog post
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });
  // Add Tag Collection
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

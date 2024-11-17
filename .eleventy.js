const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Passthrough Copy folders
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/hidden": "/",
    "./src/assets/favicons": "/favicons",
    "./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism.css",
    "./node_modules/photoswipe/dist/photoswipe.css": "/css/photoswipe.css",
    "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js":
      "/js/photoswipe-lightbox.esm.min.js",
    "./node_modules/photoswipe/dist/photoswipe.esm.min.js":
      "/js/photoswipe.esm.min.js",
  });
  // Watch Folders
  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  // Styles
  eleventyConfig.addWatchTarget("./src/sass/");
  // Images for the image pipeline.
  eleventyConfig.addWatchTarget(".src/**/*.{svg,webp,png,jpeg}");

  // Custom Plugins
  eleventyConfig.addPlugin(require("./config/eleventy.config.images.js"));
  eleventyConfig.addPlugin(require("./config/eleventy.config.masonry.js"));
  eleventyConfig.addPlugin(require("./config/eleventy.config.masonryImage.js"));

  // allow for non-indexed and included in collection drafts
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    function () {
      return (data) => {
        // Always exclude from non-watch/serve builds
        if (data.draft) {
          return true;
        }

        return data.eleventyExcludeFromCollections;
      };
    }
  );

  // Official Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
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
  eleventyConfig.addFilter("findById", function (array, id) {
    return array.find((i) => i.id === id);
  });
  eleventyConfig.addFilter("decorate", function (text) {
    return "***" + text + "***";
  });
  // Filter to retrieve a random blog post
  eleventyConfig.addFilter("randomPost", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });
  // Filter to limit radom items
  eleventyConfig.addFilter("randomLimit", (arr, limit, currPage) => {
    // Filters out current page
    const pageArr = arr.filter((page) => page.url !== currPage);

    // Randomizes remaining items
    pageArr.sort(() => {
      return 0.5 - Math.random();
    });

    // Returns array items up to limit
    return pageArr.slice(0, limit);
  });
  // Shortcodes
  eleventyConfig.addShortcode("currentBuildDate", () => {
    return new Date().toISOString();
  });
  // Sidebar
  // from: https://johnwargo.com/posts/2024/adding-sidebars-eleventy/
  eleventyConfig.addPairedShortcode(
    "sidebar",
    function (content, title = "Sidebar Title", className = "sidebar") {
      var paragraphs = content.split(/(?:\r?\n)+/);
      var rc = `<aside class="${className}">`;
      rc += `<h3>${title}</h3>`;
      paragraphs.forEach((paragraph) => {
        if (paragraph.trim() === "") return;
        rc += `<p>${paragraph}</p>`;
      });
      rc += "</aside>";
      return rc;
    }
  );

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
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    dir: {
      input: "src",
      output: "public",
    },
  };
};

const Image = require("@11ty/eleventy-img");


async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [150, 300, 600],
    formats: ["avif", "jpeg"],
    outputDir: "./public/img/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) { 
	eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

};
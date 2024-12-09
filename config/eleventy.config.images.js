const Image = require("@11ty/eleventy-img");
const svgContents = require("eleventy-plugin-svg-contents");

async function imageShortcode(src, alt, caption, classes, sizes) {
  let metadata = await Image(src, {
    widths: [1440],
    formats: ["jpg"],
    outputDir: "./public/img/",
  });

	let lowsrc = metadata.jpeg[0];

  return `<figure class="${classes}"><picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture><figcaption>${caption}</figcaption></figure>`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  // SVGs alternative
  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async (filename) => {
    const metadata = await Image(`./src/assets/icons/${filename}`, {
      formats: ["svg"],
      dryRun: true,
    });
    return metadata.svg[0].buffer.toString();
  });
};

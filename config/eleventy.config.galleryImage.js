const sharp = require('sharp');
const Image = require('@11ty/eleventy-img');

const GALLERY_IMAGE_WIDTH = 400;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

async function galleryImageShortcode(src, alt, caption) {
    let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

    const metadata = await sharp(src).metadata();

    if(metadata.height > metadata.width) {
        lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
    }

    const options = {
      formats: ["jpg"],
      widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
      urlPath: "/img/",
      outputDir: "./public/img/",
    };

    const genMetadata = await Image(src, options);

    return `
        <a href="${genMetadata.jpeg[1].url}" 
        data-pswp-width="${genMetadata.jpeg[1].width}" 
        data-pswp-height="${genMetadata.jpeg[1].height}" 
        target="_blank">
					<figure>
            <img src="${genMetadata.jpeg[0].url}" alt="${alt}" />
					<figcaption>${caption}</figcaption>
					</figure>
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addLiquidShortcode('galleryImage', galleryImageShortcode)
}
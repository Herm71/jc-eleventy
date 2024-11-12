// .eleventy.js
function galleryShortcode(content, name) {
    return `
        <div>
            <div class="gallery" id="gallery-${name}">
                ${content}
            </div>
            <script type="module">
                import PhotoSwipeLightbox from '/js/photoswipe-lightbox.esm.min.js';
                import PhotoSwipe from '/js/photoswipe.esm.min.js';
                const lightbox = new PhotoSwipeLightbox({
                    gallery: '#gallery-${name}',
                    children: 'a',
                    pswpModule: PhotoSwipe,
                    preload: [1, 1]
                });
                lightbox.init();
            </script>
        </div>
    `.replace(/(\r\n|\n|\r)/gm, "");
}

module.exports = function(eleventyConfig) {
    ...
    eleventyConfig.addPairedLiquidShortcode('gallery', galleryShortcode)
    ...
}
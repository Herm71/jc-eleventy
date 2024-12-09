---
layout: layouts/base.njk
title: Images
eleventyNavigation:
  key: Images
  parent: Demos
tags: demo
---


### Aligned Wide

**Class:** `.image-align-wide`

**Shortcode:**

```liquid
{% raw %}
{% image "./src/assets/images/image.jpg", "alt text", "caption", "image-align-wide", "(min-width: 30em) 50vw, 100vw" %}
{% endraw %}
```

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis.

{%image "./src/assets/images/gallery-examples/mormon-rocks.jpg", "photo of Burlington Northern Santa Fe train", "Burlington Northern Santa Fe, Mormon Rocks, San Bernardino, CA", "image-align-wide", "(min-width: 1024px) 50vw, 100vw"%}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

### Aligned Center

**Class:** `.image-align-center`

**Shortcode:**

```liquid
{% raw %}
{% image "./src/assets/images/image.jpg", "alt text", "caption", "image-align-center", "(min-width: 30em) 50vw, 100vw" %}
{% endraw %}
```

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

{%image "./src/assets/images/jt-town/joshua-tree-sunset.jpg", "Sunset in Joshua Tree", "Joshua Tree Sunset", "image-align-center", "(min-width: 30em) 50vw, 100vw"%}
Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

### Aligned Left

**Class:** `.image-align-left`

**Shortcode:**

```liquid
{% raw %}
{% image "./src/assets/images/image.jpg", "alt text", "caption", "image-align-left", "(min-width: 30em) 50vw, 100vw" %}
{% endraw %}
```

{% image "./src/assets/images/gallery-examples/lucy-shelf.jpg", "Lucy on her shelf", "Lucy on her shelf", "image-align-left", "(min-width: 30em) 50vw, 100vw" %}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum. Etiam tristique dictum mollis. Nulla semper elementum eros ut semper. Maecenas vehicula suscipit lacus, et cursus ex sodales sed. Integer aliquam luctus erat, nec hendrerit nulla maximus lobortis. Quisque suscipit porttitor posuere. Vestibulum non felis pharetra, dictum elit et, accumsan elit. In lorem eros, lobortis in semper non, tincidunt in leo. Nam dictum tincidunt porttitor.

### Aligned Right

**Class:** `.image-align-right`

**Shortcode:**

```liquid
{% raw %}
{%image "./src/assets/images/image.jpg", "alt text", "caption", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}
{% endraw %}
```

{%image "./src/assets/images/gallery-examples/lucy-box.jpg", "photo of a cat", "Lucy in her box", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum. Etiam tristique dictum mollis. Nulla semper elementum eros ut semper. Maecenas vehicula suscipit lacus, et cursus ex sodales sed. Integer aliquam luctus erat, nec hendrerit nulla maximus lobortis. Quisque suscipit porttitor posuere. Vestibulum non felis pharetra, dictum elit et, accumsan elit. In lorem eros, lobortis in semper non, tincidunt in leo. Nam dictum tincidunt porttitor.

### Gallery

**Shortcodes:**

```liquid
{% raw %}
{% gallery "test" %}
{% galleryImage "./src/assets/images/landscape-image.jpg", "alt text", "caption" %}
{% galleryImage "./src/assets/images/portrait-image.jpg", "alt text", "caption" %}
{% endgallery %}
{% endraw %}
```

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis.
{% gallery "test" %}
{% galleryImage "./src/assets/images/gallery-examples/arroyo-seco.jpg", "Arroyo Seco", "Arroyo Seco, Monterey County, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/fall-creek-santa-cruz.jpg", "Redwood Tree, Santa Cruz", "Fall Creek, Santa Cruz, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/berryessa-gap.jpg", "Berryessa Gap", "Berryessa Gap, Winters, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/dana-point.jpg", "Paddle boarder in Dana Point", "Dana Point, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/palm-springs-palms.jpg", "Native palm trees, Palm Springs", "Native palms, Indian Canyons, Palm Springs, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/bolinas.jpg", "Bolinas beach", "Bolinas, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/marilyn-monroe-palm-springs.jpg", "Marilyn Monroe statue, Palm Springs", "Marilyn Monroe statue, Palm Springs Art Museum, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/klamath-river.jpg", "River, Six Rivers, CA", "Klamath River, Six Rivers, CA" %}

{% galleryImage "./src/assets/images/gallery-examples/mccloud-river-lower-falls.jpg", "McCloud River, McCloud, CA", "Lower Falls, McCloud River, McCloud, CA" %}

{% galleryImage "./src/assets/images/gallery-examples/santa-cruz-harbor-lighthouse.jpg", "Lighthouse on Santa Cruz Harbor", "Seabright Beach, Santa Cruz, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/shelter-cove.jpg", "Shelter Cove, CA", "Lost Coast, Shelter Cove, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/santa-cruz.jpg", "Ocean from Westside Santa Cruz", "Westside, Santa Cruz, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/seabright-beach-santa-cruz.jpg", "Seabright Sunset Santa Cruz", "Seabright Sunset, Santa Cruz, CA" %}
{% galleryImage "./src/assets/images/gallery-examples/seven-sisters-falls.jpg", "Seven Sisters Falls", "Seven Sisters Falls, Indian Canyons, Palm Springs, CA" %}

{% endgallery %}
Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula

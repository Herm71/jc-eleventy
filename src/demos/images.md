---
layout: layouts/base.njk
title: Images
eleventyNavigation:
  key: Images
  parent: Demos
tags: demo
---


### Aligned Wide

**class:** `.image-align-wide`

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis.
{%image "./src/assets/images/antelope-valley-wildflowers.jpg", "photo of Antelope Valley, CA", "Antelope Valley wildflowers", "image-align-wide", "(min-width: 1024px) 50vw, 100vw"%}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

### Aligned Center

**class:** `.image-align-center`

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

{%image "./src/assets/images/joshua-tree-sunset.jpg", "Sunset in Joshua Tree", "Joshua Tree Sunset", "image-align-center", "(min-width: 30em) 50vw, 100vw"%}
Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum.

### Aligned Left

**class:** `.image-align-left`

{%image "./src/assets/images/lucy-shelf.jpg", "Lucy on her shelf", "Lucy on her shelf", "image-align-left", "(min-width: 30em) 50vw, 100vw"%}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum. Etiam tristique dictum mollis. Nulla semper elementum eros ut semper. Maecenas vehicula suscipit lacus, et cursus ex sodales sed. Integer aliquam luctus erat, nec hendrerit nulla maximus lobortis. Quisque suscipit porttitor posuere. Vestibulum non felis pharetra, dictum elit et, accumsan elit. In lorem eros, lobortis in semper non, tincidunt in leo. Nam dictum tincidunt porttitor.

### Aligned Right

**class:** `.image-align-right`

{%image "./src/assets/images/lucy-shelf.jpg", "Lucy on her shelf", "Lucy on her shelf", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum. Etiam tristique dictum mollis. Nulla semper elementum eros ut semper. Maecenas vehicula suscipit lacus, et cursus ex sodales sed. Integer aliquam luctus erat, nec hendrerit nulla maximus lobortis. Quisque suscipit porttitor posuere. Vestibulum non felis pharetra, dictum elit et, accumsan elit. In lorem eros, lobortis in semper non, tincidunt in leo. Nam dictum tincidunt porttitor.

### Gallery

**classes:** `<div class="gallery">` and `<figure class="gallery-item">`

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis.
{% gallery "test" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Tiberto Skveras", "caption" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Tibetan Flags" %}
{% galleryImage "./src/assets/images/joshua-tree-sunset.jpg", "Tibetan Flags" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Tiberto Skveras" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Tibetan Flags" %}
{% galleryImage "./src/assets/images/joshua-tree-sunset.jpg", "Tibetan Flags" %}
{% endgallery %}
Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula

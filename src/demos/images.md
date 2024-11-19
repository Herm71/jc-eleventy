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
{%image "./src/assets/images/joshua-tree/antelope-valley-wildflowers.jpg", "photo of Antelope Valley, CA", "Antelope Valley wildflowers", "image-align-wide", "(min-width: 1024px) 50vw, 100vw"%}

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

{% image "./src/assets/images/lucy-shelf.jpg", "Lucy on her shelf", "Lucy on her shelf", "image-align-left", "(min-width: 30em) 50vw, 100vw" %}

Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula vel libero ullamcorper interdum. Etiam tristique dictum mollis. Nulla semper elementum eros ut semper. Maecenas vehicula suscipit lacus, et cursus ex sodales sed. Integer aliquam luctus erat, nec hendrerit nulla maximus lobortis. Quisque suscipit porttitor posuere. Vestibulum non felis pharetra, dictum elit et, accumsan elit. In lorem eros, lobortis in semper non, tincidunt in leo. Nam dictum tincidunt porttitor.

### Aligned Right

**Class:** `.image-align-right`

**Shortcode:**

```liquid
{% raw %}
{%image "./src/assets/images/image.jpg", "alt text", "caption", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}
{% endraw %}
```

{%image "./src/assets/images/lucy-shelf.jpg", "photo of a cat", "Lucy on her shelf", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}

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
{% galleryImage "./src/assets/images/joshua-tree/joshua-tree-entrance.jpg", "entrance to Joshua Tree Nat'l Park", "Jason at the park entrance" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Cat on ledge", "Lucy on her shelf" %}
{% galleryImage "./src/assets/images/jt-town/joshua-tree-sunset.jpg", "Joshua tree in the desert", "Joshua Tree Sunset" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Cat on ledge", "Lucy on her shelf" %}
{% galleryImage "./src/assets/images/lucy-shelf.jpg", "Cat on ledge", "Lucy on her shelf" %}
{% galleryImage "./src/assets/images/jt-town/joshua-tree-sunset.jpg", "Joshua tree in the desert", "Joshua Tree Sunset" %}
{% endgallery %}
Integer vehicula at felis quis luctus. Aenean mattis malesuada ex, eget vulputate lectus interdum ut. Integer ultrices lectus vitae tellus dignissim mollis. Cras sagittis lorem a dolor blandit posuere. Aliquam nec pharetra tortor, nec pretium mi. Quisque mattis ligula

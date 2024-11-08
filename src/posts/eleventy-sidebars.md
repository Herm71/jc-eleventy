---
layout: layouts/post.njk
title: "Responsive sidebars with Eleventy"
# subtitle: "This is a test blog post"
date: 2024-11-08
tags: [eleventy, web development]
author: Jason Chafin
---
As I build this site, it has occurred to me that I needed a *sidebar* to display random content slightly germane to the topic at hand. Naturally, I went to Google to see how other [Eleventy](https://www.11ty.dev/) developers implemented sidebars on their sites. I came across a nifty solution by [John M. Wargo](https://johnwargo.com/), [Adding Sidebars to an Eleventy Site](https://johnwargo.com/posts/2024/adding-sidebars-eleventy/).

I used the methodology in that post as a springboard for creating sidebars on my own site. I augmented  Wargo's code a bit because I want to have sidebars that I can float to the left or to the right, in addition to a center-aligned one referenced in the post.

What follows is my version of Wargo's sidebar concept.

## Add a parameter to the `addPairedShortcode` config function

The [initial config function](https://johnwargo.com/posts/2024/adding-sidebars-eleventy/#:~:text=Next%2C%20I%20added%20a%20paired%20shortcode%20to%20the%20site%3A) hard codes the class `"wim"` to the wrapper `<div>`, which is what the `CSS` hooks into. Since I'll need additional classes (*left* and *right* in addition to default), I want to be able to add them as a parameter in the short code rather than having them hard coded via the function.  The original function accepts `content` and `title` as parameters so I amended it to also accept a `className` parameter, gave it a default class of `sidebar` and returned it to the `<aside>` element.

{% sidebar "Semantic HTML" %}
<p>You'll notice I use the <code>&lt;aside&gt;</code> element rather than the <code>&lt;div&gt;</code> element. This is to keep things semantically kosher. (Also, this is an example of the default sidebar shortcode.)</p>
{% endsidebar %}

### Eleventy config

The amended `addPairedShortcode` function I use in my `.eleventy.js` file. It accepts three parameters, `content`, `title` and `className`. The `className` is added to the `<aside>` element.

```javascript
// Sidebar
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
```

## Styles

As mentioned, I want  `left`, `right` and `default` sidebars so I needed classes to hook into. The default, `center` (with no parameters), is simply `<aside class="sidebar>`. Left is `<aside class="sidebar left>` and right is `<aside class="sidebar right>` . I also want the left and right sidebars to have negative margins so they slide outside the content width.

I added media queries to distinguish between mobile and desktop and replaced *some* static CSS values (e.g., color, padding, margin) with global variables specific to my site, some of which I have included here. Your mileage may vary.

```css
:root {
    --color-bg: #fef6e4;
    --color-bg-offset: #fef6e4;
    --color-primary: #f582ae;
    --color-secondary: #8bd3dd;
    --color-tertiary: #f3d2c1;
    --color-highlight: #fef6e4;
    --color-text: #172c66;
    --color-text-offset: #474B52;
    --color-headline: #001858;
    --color-button-text: #f582ae;
    --color-button-bg: #001858;
    --color-border: #001858;
    --spacingUnit: 1rem;
}
aside {
  margin-bottom: var(--spacingUnit);
}
aside.sidebar {
  width: 100%;
  padding: 1.5rem;
  background: var(--color-bg-offset);
  border: 2pt solid var(--color-secondary);
  box-shadow: 5px 5px 5px #eee;
}
aside.sidebar h3 {
  margin: 0 0 0.6rem;
}
aside.sidebar p {
  margin: 0;
}
@media (min-width: 480px) {
  aside.sidebar.right, aside.sidebar.left {
    width: 30%;
  }
}
@media (min-width: 480px) {
  aside.sidebar.right {
    float: right;
    margin: 0 -10% 1rem 1rem;
  }
}
@media (min-width: 480px) {
  aside.sidebar.left {
    float: left;
    margin: 0 1rem 1rem -10%;
  }
}
```

## Short code variations

With these changes, I can use the following short code variations to create my sidebars.

### Variation: Default sidebar

The default shortcode with zero parameters will create a block sidebar with a default title.

#### Short code

```liquid
{% raw %}
{% sidebar %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.

{% endsidebar %}
{% endraw %}
```

#### Html output

```html
<aside class="sidebar">
    <h3>Sidebar Title</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend
        imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum
        lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non,
        lacinia quis, eros.
    </p>
</aside>
```

### Front end result

Cras volutpat, lacus quis semper pharetra, nisi enim dignissim est, et sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu tortor. Curabitur sodales scelerisque magna. Donec ultricies tristique pede. Nullam libero. Nam sollicitudin felis vel metus.
{% sidebar %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{% endsidebar %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna.

### Variation: Left sidebar (with title)

Using the shortcode with `title` and `class` parameters defining the `left` class (note, one must also define `sidebar` as a class).

#### Short code

```liquid
{% raw %}
{% sidebar "Left Sidebar", "sidebar left" %}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.

{% endsidebar %}
{% endraw %}
```

#### Html output

```html
<aside class="sidebar left">
    <h3>Left Sidebar</h3>
    <p>
        Cras volutpat, lacus quis semper pharetra, nisi enim dignissim est, et sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu tortor. Curabitur sodales scelerisque magna. Donec ultricies tristique pede. Nullam libero.
        Nam sollicitudin felis vel metus. Nullam posuere molestie metus.
    </p>
</aside>
```

### Front end result

{% sidebar "Left Sidebar", "sidebar left" %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.
{% endsidebar %}
Cras volutpat, lacus quis semper pharetra, nisi enim dignissim est, et sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu tortor. Curabitur sodales scelerisque magna. Donec ultricies tristique pede. Nullam libero. Nam sollicitudin felis vel metus. Nullam posuere molestie metus. Nullam molestie, nunc id suscipit rhoncus, felis mi vulputate lacus, a ultrices tortor dolor eget augue. Aenean ultricies felis ut turpis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse placerat tellus ac nulla. Proin adipiscing sem ac risus. Maecenas nisi. Cras semper.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna.

### Variation: Right sidebar (with title)

Using the shortcode with `title` and `class` parameters defining the `right` class (note, one must also define `sidebar` as a class).

#### Short code

```liquid
{% raw %}
{% sidebar "Right Sidebar", "sidebar right" %}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.

{% endsidebar %}
{% endraw %}
```

#### Html output

```html
<aside class="sidebar right">
    <h3>Right Sidebar</h3>
    <p>
        Cras volutpat, lacus quis semper pharetra, nisi enim dignissim est, et sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu tortor. Curabitur sodales scelerisque magna. Donec ultricies tristique pede. Nullam libero.
        Nam sollicitudin felis vel metus. Nullam posuere molestie metus.
    </p>
</aside>
```

### Front end result

{% sidebar "Right Sidebar", "sidebar right" %}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt.
{% endsidebar %}
Cras volutpat, lacus quis semper pharetra, nisi enim dignissim est, et sollicitudin quam ipsum vel mi. Sed commodo urna ac urna. Nullam eu tortor. Curabitur sodales scelerisque magna. Donec ultricies tristique pede. Nullam libero. Nam sollicitudin felis vel metus. Nullam posuere molestie metus. Nullam molestie, nunc id suscipit rhoncus, felis mi vulputate lacus, a ultrices tortor dolor eget augue. Aenean ultricies felis ut turpis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse placerat tellus ac nulla. Proin adipiscing sem ac risus. Maecenas nisi. Cras semper.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna.

## Limitations

This short code *only* parses `html`. Markdown is rendered as raw text. A future `TODO` might be to develop a filter that parses Markdown in addition to HTML.

{% sidebar "Markdown" %}

#### Markdown Header

Lorem ipsum dolor sit amet, [consectetuer adipiscing elit](https://www.google.com/). Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna.
{% endsidebar %}

## Conclusion

Notwithstanding the above limitations, I'm pleased with this implementation. I'll fiddle with it in the future, but for I now have a decent framework to work with.

I'm psyched I came across Wargo's post. I'm still relatively new to developing with Eleventy so I'm appreciative of straight forward posts like his that I can learn from. Hopefully my twist on that concept will be of some benefit to somebody else in the development community.

This site has a [sidebars demo](/demos/sidebars/) page that shows how this might work in a layout. You might also check out my [theme demo](/demos/theme/) page, which defines many of the colors for the `color` variables used on this site.

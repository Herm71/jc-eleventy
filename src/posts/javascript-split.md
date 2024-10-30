---
layout: layouts/post.njk
title: "JavaScript Split"
subtitle: "My first piece of JavaScript"
date: 2024-10-26
tags: [web development, javascript]
author: Jason Chafin
---
Looking back on my Github repos, I came across an interesting artifact of my web development journey, [JavaScript Split](https://github.com/Herm71/javascript-split).

One of my first assignments after joining UC Santa Cruz was to apply special styles to certain words (*a, and, the, of*, mostly) in the primary headings (`<h1>` elements) on UC Santa Cruz's web network, which in 2018 was the [Cascade CMS](https://www.hannonhill.com/products/cascade-cms-web-content-management/index.html) (we've since migrated to WordPress).

As a WordPress developer, my strength has been [PHP](https://www.php.net/). I'd used the [JQuery](https://jquery.com/) library on occasion but JavaScript was a "second language" to me (that I am *still* learning), so I had my work cut out.

This bit of code searches for certain words in an array and, if found, wraps them in `<span>` elements with a custom class, enabling them to be styled all fancy-like.

Looking at this code today and knowing what I know now, I'd have likely written it differently. On the other hand, [it is still in use today](https://www.eeb.ucsc.edu/) so, if it ain't broke, why fix it?

But it's fun to look back and measure one's progress so I thought i'd throw it up here for posterity. Maybe somebody else can learn from it, too.

## Doin' the splits

```javascript
(function() {
    var heading = document.querySelector('.secondary-name a').innerHTML;
    var split = heading.split(" ");
    var words = ["of", "Of", "and", "And", "is", "Is", "she", "She"];

    for (var i = 0; i < split.length; i++) {
        for (var j = 0; j < words.length; j++) {
            if (split[i] == words[j]) {
                split[i] = "<span class='connector'>" + split[i] + "</span>";
            }
        }
    }

    var newHeading = split.join(' ');

    document.querySelector('.secondary-name a').innerHTML = newHeading;
})();
```

[Check out my codepen](https://codepen.io/Herm71/pen/xYawXB) to see it in action.

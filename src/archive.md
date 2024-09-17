---
title: "Blog"
layout: "layouts/home.njk"
permalink: /posts/
eleventyNavigation:
	key: Blog
	order: 2
---

## All Posts

<ul>
{%- for post in collections.post -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

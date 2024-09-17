---
layout: layouts/base.njk
eleventyNavigation:
  key: Posts
  order: 3
permalink: /posts/
---

## All Posts

<ul>
{%- for post in collections.post -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>

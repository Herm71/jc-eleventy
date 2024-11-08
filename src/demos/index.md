---
layout: layouts/base.njk
title: Demos
robots: noindex
statement: "Very important statement"
eleventyNavigation:
  key: Demos
  order: 2

---

A collection of demonstration pages. Mostly for personal use as I develop this site.
<ul>
{%- for demo in collections.demo -%}
 <li><a href="{{ demo.url }}">{{ demo.data.title }}</a></li>
{%- endfor -%}
</ul>

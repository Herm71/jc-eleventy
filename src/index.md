---
title: "Jason Chafin"
layout: "layouts/home.njk"
templateEngineOverride: njk,md
---

{% set navPages = collections.all | eleventyNavigation %}
{{ navPages | dump | safe }}

{% svgIcon 'github.svg' %}

{% svgIcon 'github.svg' %}

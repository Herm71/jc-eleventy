---
layout: layouts/post.njk
title: "On Building with Eleventy"
description: "Exploring Static Site Generators"
date: 2024-09-25
author: "Jason"
tags: [eleventy, web development, "draft"]
---

I've been building websites since 2011. Not as long as some people but long enough. [WordPress](https://wordpress.org) has largely been my bread and butter for most of this time. [It still is](https://github.com/ucsc/ucsc-2022/commits/main/?author=Herm71). But in my current role as a [web developer for UC Santa Cruz](https://campusdirectory.ucsc.edu/cd_detail?uid=jchafin), I've had many opportunities to develop using _other_ content creation systems, such as [Static Site Generators (SSGs)](https://jamstack.org/generators/).

A static site does not require querying a database in order to return content -- it's always "just there." (Thanks to the [Gutenberg Project](https://github.com/WordPress/gutenberg), added to Core in [Version 5.0](https://wordpress.org/documentation/wordpress-version/version-5-0/), WordPress now publishes pages as static.) Content on a static site can be created with plain text files.

Plain text has become my favorite way to write anything -- meeting notes, to-do lists, goals and aspirations, whatever. Plain text is universally readable and very portable.

My favorite "flavor" of plain text is [Markdown](https://en.wikipedia.org/wiki/Markdown). Markdown can be used for many types of writing. It can be used in [Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) comments, it can be used in [Slack](https://slack.com/help/articles/202288908-Format-your-messages) (although, they call it `Markup`), it can even be used for creating [WordPress posts](https://wordpress.com/support/wordpress-editor/blocks/markdown-block/). I currently use [Obsidian](https://obsidian.md) as my primary note taking app and works _entirely_ in Markdown.

As much as I love WordPress, a [Static Site Generator's](https://jamstack.org/generators/) (SSG) ability to parse plain text such as Markdown makes it very easy to work into my existing content creation workflow. SSG's such as [Jekyll](https://jekyllrb.com/) and [Eleventy](https://www.11ty.dev/) can take those plain text files and turn them into `<html>`.

Which is what I'm doing with this website. I've developed [several](https://giving.ucsc.edu/) [sites](https://inquiry.ucsc.edu/) in Jekyll. But then I discovered Eleventy (11ty), which is like Jekyll on steroids.

But I'm still learning. These are some mental objects I'm bumping into as I learn and build:

- I'm used to straight [Liquid]() templating with Jekyll. Eleventy is based on a similar-but-different templating language called [Nunjucks](https://mozilla.github.io/nunjucks/). I know many Liquid calls by heart but they sometimes don't translate straight across, so I get hung up. That said, Eleventy can parse just about any [template language](https://www.11ty.dev/docs/languages/), Liquid, Handlebars, Mustache, Javascript and JSON among them.

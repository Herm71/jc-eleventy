---
layout: layouts/post.njk
title: "On Building with Eleventy"
subtitle: "Exploring Static Site Generators"
date: 2024-09-25
tags: [eleventy, web development]
author: Jason Chafin
draft: true
robots: noindex
---
I'm intrigued by [Static Site Generators (SSGs)](https://jamstack.org/generators/). Plain text has become my favorite way to write anything -- meeting notes, to-do lists, goals and aspirations, whatever. Plain text is universally readable and very portable.

My favorite _flavor_ of plain text is [Markdown](https://en.wikipedia.org/wiki/Markdown). Markdown can be used for many types of writing. It can be used in [Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) comments, it can be used in [Slack](https://slack.com/help/articles/202288908-Format-your-messages) (although, they call it `Markup`), it can even be used for creating [WordPress posts](https://wordpress.com/support/wordpress-editor/blocks/markdown-block/). I currently use [Obsidian](https://obsidian.md) as my primary note taking app, which is based on Markdown.

I'm a WordPress developer from way back. As much as I love WordPress, a **SSG**'s ability to parse plain text such as Markdown makes it very easy to work into my existing workflow. SSG's such as [Jekyll](https://jekyllrb.com/) and [Eleventy (11ty)](https://www.11ty.dev/) can take your plain text files and turn them into `<html>`.

This is how this website is built. I've developed [several](https://giving.ucsc.edu/) [sites](https://inquiry.ucsc.edu/) in Jekyll. But then I discovered **Eleventy (11ty)**, which is like Jekyll on steroids.

I'm still learning. These are some mental objects I'm bumping into as I learn and build:

- **Template language:** I'm used to straight [Liquid](https://shopify.github.io/liquid/) with Jekyll. Eleventy is based on a similar-but-different templating language called [Nunjucks](https://mozilla.github.io/nunjucks/). I know many Liquid calls by heart but they sometimes don't translate straight across, so I get hung up. That said, Eleventy can parse just about any [template language](https://www.11ty.dev/docs/languages/), Liquid, Handlebars, Mustache, Javascript and JSON among them. It's both challenging and fun to explore the myriad ways Eleventy can parse data.
- **Javascript:** Javascript is not my strongest suit. As a WordPress developer (since pre-Gutenberg), I'm used to PHP. But I'm on a quest to [learn JavaScript deeply](https://www.youtube.com/watch?v=KrZx4IY1IgU). This is helping. (also helpful: [creating a WordPress block](https://github.com/ucsc/ucsc-content-blocks), exploring [Vue](https://vuejs.org/) and [React](https://react.dev/)).
- **Building from scratch:** _Semantics_. As a WordPress Developer, I certainly _could_ build a site from scratch. I probably did back in the _Olden Days._ But WordPress does an excellent job of abstracting out content creation from theme development. Even theme developers can start with a parent theme and make a child of it, or use a framework such as [StudioPress Genesis](https://www.studiopress.com/). In these instances, all the nitty-gritty stuff like proper `<head>` tags  and `aria-labels` are taken care of for you. You might add a script with a WordPress hook, but otherwise you're good. Building this site from "scratch" (to be sure, there has been a fair amount of _copying_ and _pasting_) has given me the opportunity to refresh my knowledge of this aspect of building a proper web page.

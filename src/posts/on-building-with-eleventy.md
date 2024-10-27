---
layout: layouts/post.njk
title: "On Building with Eleventy"
subtitle: "Exploring Static Site Generators"
date: 2024-09-24
tags: [eleventy, web development, "beginner's mind"]
author: Jason Chafin
---
I'm intrigued by [Static Site Generators (SSGs)](https://jamstack.org/generators/). Plain text has become my favorite way to write anything -- meeting notes, to-do lists, goals and aspirations, whatever. Plain text is universally readable and very portable.

My favorite _flavor_ of plain text is [Markdown](https://en.wikipedia.org/wiki/Markdown). Markdown can be used for many types of writing. It can be used in [Github](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) comments, it can be used in [Slack](https://slack.com/help/articles/202288908-Format-your-messages) (although, they call it `Markup`), it can even be used for creating [WordPress posts](https://wordpress.com/support/wordpress-editor/blocks/markdown-block/). I currently use [Obsidian](https://obsidian.md) as my primary note taking app, which is based on Markdown.

I'm a WordPress developer from way back. But SSG's such as [Jekyll](https://jekyllrb.com/) and [Eleventy (11ty)](https://www.11ty.dev/) can take your plain text files and turn them into `<html>`. As much as _I love WordPress_, a **SSG**'s ability to parse plain text such as Markdown makes it very easy to work into my existing workflow. .

In the past, I've developed [several](https://giving.ucsc.edu/) [sites](https://inquiry.ucsc.edu/) in Jekyll. But then I discovered **Eleventy (11ty)**, which is like Jekyll on steroids.

As I progress on this website, I thought I'd note some of the interesting challenges I've met (thus far) as I learn and build:

- **Template language:** I'm used to straight [Liquid](https://shopify.github.io/liquid/) with Jekyll. Eleventy is based on a similar-but-different templating language called [Nunjucks](https://mozilla.github.io/nunjucks/). I know many Liquid calls by heart but they sometimes don't translate straight across, so I get hung up. Thankfully the [Eleventy documentation](https://www.11ty.dev/docs/) provides [examples](https://www.11ty.dev/docs/plugins/html-base/#advanced-usage) for the many [template languages](https://www.11ty.dev/docs/languages/) that Eleventy can parse. It's both challenging and fun to explore this variety.
- **Javascript:** Javascript is not my strongest suit. As a WordPress developer (since pre-[Gutenberg](https://wordpress.org/gutenberg/)), I'm used to PHP. But I'm on a quest to [learn JavaScript deeply](https://www.youtube.com/watch?v=KrZx4IY1IgU). This is helping. (also helpful: [creating a WordPress block](https://github.com/ucsc/ucsc-content-blocks), exploring [Vue](https://vuejs.org/) and [React](https://react.dev/)).
- **Building from scratch:** _Semantics_. As a WordPress Developer, I certainly _could_ build a site from scratch. I probably did back in the _olden days._ But WordPress does an excellent job of abstracting out content creation from theme development. Theme developers can start with a parent theme and make a child of it, or use a framework such as [StudioPress Genesis](https://www.studiopress.com/). In these cases, all the _nitty-gritty_ like proper `<head>` tags  and `aria-labels` are taken care of for you. To be sure, Eleventy even has a [base blog](https://github.com/11ty/eleventy-base-blog) that can be used as a template and also has much of that nitty-gritty (much of which I have borrowed from). As an exercise, though, I'm building this site from "scratch" (notwithstanding the _borrowing_ mentioned above), which has given me an opportunity to refresh my knowledge of these aspects of building a proper website.

Finally, while builiding this site, it has been very helpful to engage my [beginner's mind](https://en.wikipedia.org/wiki/Shoshin), to "forget" my pre-conceived notions about web development in order to learn anew. I find I am taking this new knowledge and applying it to the work I do in [my day job](https://campusdirectory.ucsc.edu/cd_detail?uid=jchafin), which ultimately improves my overall skill set.

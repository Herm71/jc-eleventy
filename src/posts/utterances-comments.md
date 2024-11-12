---
layout: layouts/post.njk
title: "Add comments to any website with Utterances"
subtitle: "Comments as GitHub issues"
date: 2024-11-12
tags: [web development, github ]
author: Jason Chafin
---
One of my TODO list items for building this site was to [enable comments](https://github.com/Herm71/jc-eleventy/issues/37). In my search for a way to implement them, I came across several interesting methods, including using [Google Sheets and Forms](https://karthikganeshram.com/blog/posts/adding-comments-to-eleventy-website-with-google-sheets-and-forms/) and using [Netlify and MongoDB](https://www.thepolyglotdeveloper.com/2022/03/add-comments-section-eleventy-website-mongodb-netlify/). My site is not hosted on Netlify, so the second option would not work for me. I started down the Google Sheets/Forms path but there were too many moving parts for my liking.

Then I found a simple solution called [Utterances](https://utteranc.es/), which uses GitHub Issues for blog comments. I spend much of my online life in GitHub and track my other projects using GitHub Issues, so I figured I'd give this method a try. _**TLDR:** I'm pleased!_ I was able to get this up and running on my Eleventy site in about 15-20 minutes.

{%image "./src/assets/images/utterances.png", "screenshot of Utterances", "Utterances form", "image-align-wide", "(min-width: 1024px) 50vw, 100vw"%}

## Simple and secure

Implementing Utterances on your site is as easy as filling out the form and copying the code to your template. Since the output is a simple `<script>` tag, Utterances could be used to add comments to _any_ website, given access to the proper template. It could even be used to replace comments on a WordPress website.

The App uses GitHub [OAuth flow](https://developer.github.com/v3/oauth/#web-application-flow) for authentication. In order to comment, users must be signed in to GitHub (they may also comment directly in the repo itself).

{%image "./src/assets/images/enable-utterances.png", "enable Utterances script", "Paste this script", "image-align-center", "(min-width: 30em) 50vw, 100vw"%}

## Customizable

{%image "./src/assets/images/utterance-themes.png", "screenshot of Utterances themes", "Nine themes", "image-align-right", "(min-width: 30em) 50vw, 100vw"%}

Styled with [Primer](http://primer.style/), the css toolkit that powers GitHub, there are nine themes to choose from. If none of the themes suit your needs, there are two classes you can use for further customization, `.utterances` and `.utterances-frame`. They even invite [contributions](https://github.com/utterance/utterances/blob/master/CONTRIBUTING.md) of custom themes.

You can set up a custom label to which each comment/issue is assigned. If you already have your site in a repo, you could send your comments to your existing repo and use the custom label to filter them by. For my implementation, however, I set up a [separate repo to collect my comments](https://github.com/Herm71/jc-eleventy-comments).

However you set it up, the repo must be public and have the [utterances app](https://github.com/apps/utterances) installed on it.

## How I did it

For my site, which is built using [Eleventy](https://www.11ty.dev/), I want comments on posts but not pages, so I added the script to my `post.njk` layout template. To keep things [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), I made a separate `comments.njk` file in a subdirectory of my `_includes/` directory that I call `components` and included it into the proper template. This gives me flexibility in case I ever decide I _do_ want comments on pages. I can add a simple `{% raw %}{% include %}{% endraw %}` to that template to do so, and if I ever need to edit the script, I only need to do so in one place.

```html
<script src="https://utteranc.es/client.js"
        repo="Herm71/jc-eleventy-comments"
        issue-term="title"
        label="Comment"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
</script>
```

`comments.njk` file

```liquid
{% raw %}
{{ content | safe }}
{% include "components/comments.njk" %}
{% endraw %}
```

`post.njk` layout template

The result is the comment form you see at the bottom of this post. I will probably iterate over this implementation a few times. I'd like to have its themes match my own site's Light and Dark themes, so will probably play with the styling. But overall, I'm pleased with how it looks and how easy it was to add to my site.

Test it out by leaving a comment!

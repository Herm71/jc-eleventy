---
layout: layouts/post.njk
title: "Use a Shortcode for ACF Metadata in a WordPress Block Theme"
subtitle: "When migrating from a non-Block theme"
date: 2024-12-09
tags: [WordPress, block theme, web development]
author: Jason Chafin
robots: noindex
draft: false
---
I'm in the process of migrating a WordPress site I built in 2017 (i.e., pre-Gutenberg), into a Block Theme. Like many of the WordPress sites I build, it employs [Advanced Custom Fields (ACF)](https://www.advancedcustomfields.com/) extensively for functionality. The original site has a [bespoke theme](https://github.com/ucsc/ucsc-comm-genesis-child) built with the [StudioPress Genesis Framework](https://www.studiopress.com/themes/genesis/). Its template files are `.php` and employs [custom loops](https://codex.wordpress.org/The_Loop) to interact with ACF field data. It also registers a [Custom Post Type (CPT)](https://developer.wordpress.org/plugins/post-types/registering-custom-post-types/) via a [custom functionality plugin](https://github.com/Herm71/ucsc-comm-core-functionality-plugin).

The new site will also use ACF; however, it uses a [Block Theme](https://github.com/ucsc/ucsc-2022) on a [multisite network](https://developer.wordpress.org/advanced-administration/multisite/create-network/). The new site's template files are in `.html` so I don't have the ability of adding custom `.php` templates.

## Site Migration

Site migration is fairly straight forward with a little preparation. The trick is to set up ACF before you migrate the content.

### ACF

In ACF, fields and groups can be exported as `.json` files. (Had I originally used ACF to create the CPT, its registration info could have been exported as `.json` too.)

Prior to migrating the content from the old site, I first exported and imported my ACF fields and groups into the new site.

### Custom Post Type

As mentioned above, the original CPT was registered via a plugin using the `register_post_type()` function. I won't be using this plugin on the new site; however, in addition to custom meta fields, CPTs can also be registered in ACF.

So prior to migrating the content, I registered a CPT on the new site via ACF using the _exact same_ `slug` and `labels` that I used when I originally registered the CPT via the function. Doing so, will enable the original CPT SQL data to be imported with the rest of the content.

### Content Migration

There is a lot of content on the original site. Its Media Library has been growing since it was built in 2017. I do not have access to the host on the new site's network so I could not simply [Rsync](https://en.wikipedia.org/wiki/Rsync) or FTP my `wp-content` directory from the old site to the new.

My approach was to use WordPress' default [Tools->Export](https://wordpress.org/documentation/article/tools-export-screen/) feature on the original site to create an `XML` file and use the **Tools->Import** feature on the new site to import it, being sure to select the _Download and import file attachments_ option.

This worked _okay_. The new site is on a multisite network with shared hosting. After a few minutes with the import it would choke and issue a **506 Error**. I could tell that the import was working, however, because after the "failure," I'd check the Media Library and could see that additional media items had been added. Re-running the import would gradually add more items (until it choked again). In order to get all my content into the new site, I had to run the import 28 times. But with perseverance, I was eventually able to get all my content and media imported into the new site.

## ACF Challenge

After the migration, I was able to go into the editor of my CPTs on the new site and see my ACF fields and their content in the Post editor. The challenge now is getting that content to display on the front-end of the site using the Block Editor.

### `wp_postmeta` vs `post_content`

ACF data is _metadata_ -- it is stored as separate entries in the `wp_postmeta` tables of the database; whereas block data is stored as part of `post_content`. As mentioned, the original site was a complete custom build. I relied on custom templates containing custom loops to render my custom fields on the front-end of the site. I don't have the ability to create custom `PHP` templates in the new site so I need a way to get this content onto the page.

{% image "./src/assets/images/acf-fields-imported.png", "Screenshot of imported ACF fields", "Post metadata vs Post content", "image-align-center", "(min-width: 30em) 50vw, 100vw" %}

## Failed Solution -- ACF Block

ACF Pro provides a `PHP` based framework for [creating custom blocks](https://www.advancedcustomfields.com/resources/blocks/) for their fields. My first thought was that I needed to create a new custom block for my ACF field group and use that block to display my ACF content.

While I don't have access to the new site's server and I can't make custom `php` templates, my organization maintains a "Custom Functionality Plugin" that is installed network-wide. Using such a plugin allows us to add functionality to sites that is theme independent (i.e., we can switch themes and maintain functionality).

In a development branch of this plugin in a local development environment, I followed a [tutorial for creating an ACF Block](https://www.advancedcustomfields.com/resources/create-your-first-acf-block/) and was, indeed, able to create a block that displayed my fields. However, the resulting block only allowed creating _new entries_ with those fields; I was unable to display the entries that I imported from the original site via the block.

If I was building this site "from scratch," creating an ACF Block is the approach I would consider, but it would not work in this use case.

{% image "./src/assets/images/acf-style-block.png", "Screenshot of imported ACF fields", "ACF Block", "image-align-center", "(min-width: 30em) 50vw, 100vw" %}

## Failed Solution -- WordPress Block Bindings API

WordPress 6.5 introduced a new feature called the [Block Bindings API](https://make.wordpress.org/core/2024/03/06/new-feature-the-block-bindings-api/), a new way of extending blocks that enable a developer to populate a block with a particular source. For instance, rather than creating a custom block to display metadata content as in the above example, you can [bind a custom metadata field to a block](https://developer.wordpress.org/news/2024/02/introducing-block-bindings-part-1-connecting-custom-fields/) and use, say, the [Paragraph block](https://wordpress.org/documentation/article/paragraph-block/) to output your field content.

I'm very excited about the possibilities of using the Block Bindings API going forward; however, so far it only works on ACF's basic `string` fields such as Text, Email, Number, or URL. It does not work for complex fields such as the Repeater or Flexible Content fields.

Moreover, as of this writing, in order to use Block Bindings with ACF, one needs to use the `register_meta()` function with `'show_in_rest' => true,` with their field name in addition to creating it in ACF. I suspect ACF will update their plugin in the future so this additional step is not required.

```php
register_meta(
    'post',
    'my-acf-field-name',
    array(
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
        'sanitize_callback' => 'wp_strip_all_tags'
    )
);
```

## Shortcode Solution

I decided that a [shortcode](https://codex.wordpress.org/Shortcode) would be the best way to display my field data. The WordPress Gutenberg editor provides a [Shortcode block](https://wordpress.com/support/wordpress-editor/blocks/shortcode-block/), so a properly developed shortcode (or two) should do the trick.

As mentioned above, the original bespoke theme used custom loops in custom page and post templates to render field data on the front-end. For the new site, I converted the custom loops into shortcodes.

### The Original Template Loop

The original site's theme was developed using the [StudioPress Genesis Framework](https://www.studiopress.com/themes/genesis/). The original theme's code below is from the CPT's "`single.php`" template. It removes the default `genesis_loop` and replaces it with the `bb_a_z_style_guide_single_loop()` function, which returns the ACF field data.

```php
remove_action( 'genesis_loop', 'genesis_do_loop' );
add_action( 'genesis_loop', 'bb_a_z_style_guide_single_loop' );

function bb_a_z_style_guide_single_loop(){
 echo '<article class="post type-post status-publish entry">';
 echo '<div class="entry-content" itemprop="text">';
  if( have_rows('style_definitions') ):while( have_rows('style_definitions') ): the_row();
  // vars
  $azItem = get_sub_field('editorial_style_item');
  $azDef = get_sub_field('editorial_style_definition');
  echo '<p><b>'.$azItem.':</b></p>'.$azDef.'<hr>';
  endwhile;
  endif;
 echo '</div>';
 echo '</article>';
}
```

### Converted to a Shortcode

Converting this to a shortcode is not to too difficult. Since I imported my field definitions from the original site, the names in field calls are exactly the same. In the shortcode, I stripped out all the structural `html` code, as it's no longer necessary.

#### `return`, don't `echo`

An important thing to remember when writing shortcodes in `PHP` is that they are `return`ed not `echo`ed. So, all the `echo` statements in the above function need to be converted to a `return`. To do so, I set up an empty string variable at the beginning that I call `$finaldefs`. I build on it using `.=` concatenation and the `$finaldefs` variable is what is ultimately _returned_.

In the following example, the resulting shortcode is called `[style-definition]`.

```php
add_shortcode( 'style-definition','bb_a_z_style_guide_single_loop' );

function bb_a_z_style_guide_single_loop(){

 $finaldefs = '';

 if( have_rows('style_definitions') ):while( have_rows('style_definitions') ): the_row();
  $azItem = get_sub_field('editorial_style_item');
  $azDef = get_sub_field('editorial_style_definition');  
  $finaldefs .= '<p><b>'.$azItem.':</b></p>'.$azDef.'<hr>';
  endwhile;
 endif;

return $finaldefs;
}
```

## Incorporating into a Block Theme

Now that I've converted my loop functions to shortcodes, I need to incorporate them into the new site and theme.

### Single posts

One approach would be to put the Shortcode Block containing the `[style-definition]` shortcode at the top of all our custom posts. This would work, but there is too much repetition (it is not very [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

My approach is to use the [WordPress Full Site Editor](https://wordpress.org/documentation/article/site-editor/) to create a new "Single Posts" template for my CPT.

The default single template has a [Content Block](https://wordpress.com/support/wordpress-editor/blocks/post-content-block/) that displays all content from a post or page's block editor. Because ACF data is not stored in `post_content`, the Content Block will not work for displaying our ACF Data. So, in my CPT single post template I replaced the Content Block with the Shortcode Block and dropped my `[style-definition]` shortcode into it.

Default Single Post/Page template with Content Block

CPT Single Post template with Shortcode Block and `[style-definitions]` shortcode

>NOTE
>
> Removing the _Content Block_ from the Template _will not_ remove the _Content Editor_ from the single-post editor. As the first image in this post illustrates, the Content Editor will appear above the ACF Field Group.
>
> To minimize confusion, it might be advisable to disable the Content Editor altogether for the Style Guide CPT.
>
> A function such as the following will disable the editor altogether in the CPT, leaving only the ACF  Field Group
>
> ```php
> add_action( 'init', 'disable_editor_style_guide', 99);
> function disable_editor_style_guide() {
>  remove_post_type_support( 'a_z_style_guide', 'editor' );
>  }
> ```
>
> ![[style-guide-editor-disabled.png]]
> Editor completely disabled on Style Guide CPT
>

Now, with my CPT Single Template configured, my ACF content shows on the front-end of each post and I can edit the entries in the ACF Field Group area of the editor:

Front-end Style Guide entry with ACF content rendered by shortcode

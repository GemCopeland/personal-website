# personal-website
This is a simple website for publishing a CV, research and writing. It will be used for [gemmacope.land](gemmacope.land).

## Description

This website is a collaboration between Gemma Copeland and Piper Haywood.

In the interest of being as transparent and open about our process as possible, we're documenting everything in this README from the beginning.

Below is an outline of our thinking process so far. It's probably not of interest to anyone but us!

## Rationale

- To design and develop a website in a collaborative way, as a conversation between us rather than a 'waterfall'
- To make a site that is modern but also as simple and lightweight as possible
- The code should be simple and well-documented enough that Gemma can edit it herself
- To help Gemma become more comfortable with using Git
- To allow other people with similar interests and levels of experience to fork it
- To be open about our process from the beginning

## Index

We have two options for this, either having a number of freeform text fields or going down a more structured data route. We agreed that we prefer the more structured data route, as this will also become an archive over time.

Items will automatically move from _Current and Upcoming_ to _Previous_ based on their date range

We considered how to differentiate between short-term activities like workshops and long-term activities like employment. Ultimately we decided that this doesn't need to be a visual differentiation as the difference will be obvious due to the date ranges. If necessary, Gemma can also add a job title before the studio posts.

We potentially want to hide _Writing_ to begin with. We'll set up a few utility classes like visually hidden in order to do this.

## Accessibility

It's very important to consider accessibility from the get-go. We think this should be fairly straight-forward as there will so little JavaScript. It's mainly Arena section that could be problematic, but Piper will look in to this.

As an option, we could add a small toggle in the footer that will increase the contrast throughout the site.

##  Browser support
We'll prioritise modern browsers, but it would be great if this works well on old browsers too. It's such a simple site that this shouldn't be such a big ask. It may just mean using `float` instead of `flexbox`.

## Arena section

The site will use Arena's API to display any channels found in a specific Closed channel belonging to Gemma (e.g. `My Website`).

We spoke about making this more visual but adding a grid of small thumbnails. This would function to add some more visual interest to the page, and give people a better overview of the contents.

## /thinking

If we go down the route of having _Thinking_ as a separate page on mobile, we'll need to work out what to do if people navigate directly there on desktop. One idea would be to simply reverse the two panels.

## /writing

The blog will be built with markdown and a static site generator.

We discussed on whether to implement pagination or infinite scroll, but ultimately decided we were more philosophically aligned with pagination.

## Images

One big consideration is how to host images. Image files can obviously be really big, which realistically means we'd need to host them on a CDN.

We also want to consider the speed of the site. Everything else is so simple and will load really fast, but images will potentially load slower in other locations or on slower connections. We also want to implement responsive image handling.

We discussed the approach used on [e-flux](e-flux.com), which loads a simple ASCII pattern first before loading the images. They have a separate source for this patterned background. 

Piper suggests using Arena as the CDN, creating a separate channel to collect any images to be used on the blog.

If we use Are.na for image hosting, we couldn’t go down the Medium route for progressive image enhancement, since they actually load two separate images. With Are.na, we’d only have a single image URL to play with and won't have access to their actual CDN.

We both agree that using Arena instead of introducing another service is the most elegant solution. We could potentially display a gradient on load, with colours picked from the image itself. The fallback/MVP option would be a gradient using the two colours of the site.

We discussed how to host videos, but decided that this will be implemented in the future as it's not essential. The main consideration is that embedding something from Youtube also means adding tracking to the site, which we want to avoid at all costs.

## Metadata

We need to consider how to add credits if a post has been co-authored by someone else, or has been originally published somewhere else. This should be in the metadata and not just in the body.

[Jekyll](https://jekyllrb.com/docs/posts/) gives a good overview of how the markdown files can be structured, including how to add metadata, like tags.

Tags will need to be URL-readable (lowercase and with dashes instead of spaces), as seen on [Pinboard](https://pinboard.in). Down the track, we'd like to be able to add private tags (by appending a . before the word) and to add descriptions to tags.

## Search
Is this necessary? Piper finds it very useful on her own site, but it could be also something to add down the line. Piper will consider this when she researches the tech stack.

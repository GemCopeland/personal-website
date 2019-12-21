---
title: Making a website
displayTitle: true
tags:
  - web design
  - web development
  - open work
  - open web
  - conversation
---

Some thoughts about making this website, written jointly by me and <a href="http://piperhaywood.com/">Piper Haywood</a> (italics).

<hr>

This website started as a conversation between Piper and myself. I had just left my full-time job and PH suggested that we could work together on a new website for my practice. It was also a good excuse for us to collaborate and explore some of our ideas about website design and development together.

_I was interested in working with Gemma on pretty much anything! More specifically though, I wanted to work on a site that was less of an unchanging behemoth and more of a playground for learning, a permanent sandbox and ideas container. This is how treat my site, but I hadn’t had the chance to create something similar for and with someone else before._

From the outset, we set the intention that the process should be conversation between the two of us. We're both interested in seeing design and development as a collaborative and iterative process, where both parties learn from the other. (Although, admittedly, I have learnt much more from PH during this process!)

_You say that, but I’ve definitely learned a ton from you! Especially about letting ambiguity thrive, balancing it against structure._

<!-- more -->

## Light

We think that a website can be modern without being complicated. _Better does not mean louder or more moving parts or reinventing the wheel. Goodness can come from working with existing tools and celebrating the building blocks._

Today's web development world can seem incredibly intimidating for someone just starting out. There are so many different frameworks and languages to learn, it can feel like it's better just not to start and use a template instead – something that [Jake](https://dow-smith.com/) puts quite succinctly [here](https://twitter.com/jakedowsmith/status/1184125876608352256).

_I was fortunate to pick up web development at a time when you could get away with experimenting and tinkering using the open web as a tool for self-directed learning. I didn’t have to contend with enormous echo chambers like Twitter shaming me for not using a bundler, being unfamiliar with a language, or a million other things that were outside my consciousness early on. It makes me sad that enthusiastic beginners might feel like the web development world is beyond them._

Complexity makes websites more opaque and can make them less robust. The more a site depends on complex frameworks, the more potential points of failure it has, making it harder to maintain over time. Because of this, we've made decisions to keep this site small and light wherever possible. It is a static site built with [Eleventy](https://www.11ty.io/) and hosted on [Netlify](https://www.netlify.com/).

_The aim is to use enough tools so that creating and editing content isn’t a total slog, but not so many that it feels like you need to take a course to figure it all out. We want a site is \*just\* complex enough and has appropriate [documentation](https://github.com/GemCopeland/personal-website/blob/master/README.md) for the bits that are a little more complicated._

## Accessible

Considering as broad an audience as possible from the outset ultimately makes for a better site. It sets restrictions on some visual elements, but I think that working within restrictions in a clever and thoughtful way ultimately makes something more beautiful. _And it can be \*fun\* to work with constraints!_

As with designing for mobile first, designing for accessibility encourages you to consider the relative importance of each element.

_My hope is that we can continue to explore accessibility on this site. We’ve just begun to scratch the surface._

## Structured

All text is edited in [Markdown](https://www.markdownguide.org/basic-syntax/), which we love because it is simple and human-readable yet also flexible and powerful. _We’re specifically using the [markdown-it](https://github.com/markdown-it/markdown-it) parser which lets us automatically convert straight quotes to curly quotes and a few other nifty things. See the [`.eleventy.js` file](https://github.com/GemCopeland/personal-website/blob/master/.eleventy.js) if you want to have a peek at the configuration._

Data is structured according to the vocabulary set out by [schema.org](https://schema.org/).

Using these two syntaxes relates to our ideas around maintaining long-term archives. The front-end of a website is more ephemeral (like the outer layer of a tree), while the back-end should have more longevity. We added as much structure to the data as possible from the outset, even if it isn't currently being utilised. This mindset is more about building an archive of data than a website. It's about seeing archiving as a continuous process rather than a single event.

## Fluid

Connected to this idea of continuous archiving is our choice to, wherever possible, hook into my existing workflows and tools. For example, the _Thinking_ panel uses [Arena's API](https://dev.are.na). I use Arena every day, and it has become a vital part of my thinking process. Any channel that I add to _My Website_ channel will show up here. We wanted to make something that would amplify my existing workflows rather than create any extra work.

We're also using this channel to host any images that I want to add to my blog, as a way of getting around adding another service for image hosting. _Down the line, when it’s proven that another platform would be useful, we could use a Content Delivery Network (CDN) or we might configure it with Netlify Large Media._

## Open

We have documented both our code and our process on [Github](https://github.com/GemCopeland/personal-website). The source code is licensed under the [GNU General Public License v3.0](https://github.com/GemCopeland/personal-website/blob/master/LICENSE), and PH has created an in-depth README that also explains things like Git, the command line, static site generators, and other things code-related. Hopefully this is a good resource for others with similar levels of experience and interest. Unless otherwise stated, all content on the site is by me and subject to a [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

## Further reading

- [A Handmade Web](http://luckysoap.com/statements/handmadeweb.html) by JR Carpenter
- [My website is a shifting house next to a river of knowledge. What could yours be?](https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/) by Laurel Schwulst
- [Website with the Sound of its own Making](http://websitewiththesoundofitsownmaking.net/) by Emma Rae Norton
- [Everything Easy is Hard Again](https://frankchimero.com/writing/everything-easy-is-hard-again/) by Frank Chimero
- Contribute to the channels [Digital Design Criticism](https://www.are.na/gemma-copeland/digital-design-criticism) and [Performance is Political](https://www.are.na/gemma-copeland/performance-is-political) on Arena

<hr>

_Here’s to your own garden on the WWW, long may it change!_

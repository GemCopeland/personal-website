# personal-website

This is a simple website for publishing a CV, research and writing. It will be used for [gemmacope.land](https://gemmacope.land).

It is a WORK IN PROGRESS!

## Rationale

- To design and develop a website in a collaborative way, as a conversation between us rather than a 'waterfall'
- To make a site that is modern but also as simple and lightweight as possible
- The code should be simple and well-documented enough that Gemma can edit it herself
- To help Gemma become more comfortable with using Git
- To allow other people with similar interests and levels of experience to fork it
- To be open about our process from the beginning

## Guide

The instructions below assume that the reader is an enthusiastic beginner to things like Git, the command line, static site generators, and other things code-related. As such, there are footnotes peppered throughout that provide a little more context on terms that may be unfamiliar.

### Getting started

We’re using Git for version control and GitHub as a remote repository host<sup id="ref-1"><a href="#footnote-1">1</a></sup>. Because of this, our first task is to <mark>create a local copy of the repository</mark> (repo) on your computer. Open up the command line<sup id="ref-2"><a href="#footnote-2">2</a></sup> and then use the command `cd`<sup id="ref-3"><a href="#footnote-3">3</a></sup> to navigate to the folder where you’d like to store these website files. Next, clone this repo by running `git clone https://github.com/GemCopeland/personal-website.git personal-website`<sup id="ref-4"><a href="#footnote-4">4</a></sup>. Once this command finishes executing, you should have all of the files set up in the directory you specified at the end of your `git clone` command. This includes the `/.git`<sup id="ref-5"><a href="#footnote-5">5</a></sup> files that are helping us with version control.

Next, we need to <mark>install the dependencies</mark> using `npm`<sup id="ref-6"><a href="#footnote-6">6</a></sup>. One of the core dependencies for this project is [Eleventy](https://www.11ty.io/), a static site generator<sup id="ref-7"><a href="#footnote-7">7</a></sup>. Check that you have `npm` installed globally<sup id="ref-8"><a href="#footnote-8">8</a></sup> by running `npm -v`, and check that you have at least version 8 of Node.js by running `node -v`. If you get an error with either command, you probably need to install Node.js and / or `npm`. Visit [npmjs.com](https://www.npmjs.com/get-npm) to get what you need. If your version of Node.js is too old, you’ll need to update it<sup id="ref-9"><a href="#footnote-9">9</a></sup>. If `npm` and `node` are looking good, you can go ahead and install this project’s dependencies by running `npm install`.

At this point, we’ve got the static site generator [Eleventy](https://www.11ty.io/) ready for use. Run `npx @11ty/eleventy --serve` to <mark>fire up a local web server</mark>. You’ll see a bunch of output related to writing, processing, and watching files. Once the output shows the BrowserSync<sup id="ref-10"><a href="#footnote-10">10</a></sup> Access URLs, visit `http://localhost:8080/` in your preferred browser. You should see your site! To shut down your local web server, type in the command `ctrl + c` (it looks like `^C` in the CLI).

### Deploying your site

To deploy the website to a more traditional web host via FTP / SFTP<sup id="ref-11"><a href="#footnote-11">11</a></sup>, compile the website by running `npx @11ty/eleventy`. This will put all of your website files in to the output folder `/_dist`.

Alternatively, <mark>hook the repo up to Netlify</mark>. [Here’s a step-by-step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). These are the settings you’d use:

Branch: `master`  
Dir: `_dist`  
Build command: `npx @11ty/eleventy`

This tells Netlify that when some change happens on the `master` branch<sup id="ref-12"><a href="#footnote-12">12</a></sup>, it should run the build command `npx @11ty/eleventy` and deploy any files in the `/_dist` directory.

### Editing content

All of the content files can be found in `/src`. As a general rule, you should feel confident editing Markdown files (files ending in `.md`). You can also edit template files (`.njk`), styles (`.css`), JavaScript (`.js`), or data (`.json`), but changes to these files may require more delicate consideration.

Within the Markdown files, you will find frontmatter at the top of the file delimited by `---`. This defines data that is separate from the main page content found beneath the frontmatter.

The content that you will edit most frequently is:

- `/src/activity` – Used to populate the activity list on the homepage
- `/src/pages` – Includes your main pages (Home, Thinking, etc.) as well as default pages such as Privacy
- `/src/posts` - Used to populate the Writing feed

Within these directories, you may find a `/_drafts` folder. Files within this folder will not be published, so you can safely keep WIP files within these folders. See the demo markdown files within these folders for examples of how to format content

You may also find a `.json` file within these folders. These data files set default values for their sibling `.md` files so that it does not need to be rewritten again and again.

To edit content locally, open up your local site files in your preferred text editor<sup id="ref-13"><a href="#footnote-13">13</a></sup> and then fire up your local server by running `npx @11ty/eleventy --serve`.

The content is primarily written in Markdown, so please refer to their documentation for syntax tips. Keep an eye on your curly quotes and apostrophes.

Be sure to push your edits when you’re done!

### Editing styles

TODO Obvi it’s mostly CSS, but will include guidance about how to tweak colours easily, in particular.

### Committing and pushing changes to the remote repository

TODO

### Forking this project

TODO Want to add guidance about how someone could grab this and tweak it for themselves.

## Footnotes

<ol>

  <li id="footnote-1">GitHub is just one of many remote repository hosts. GitLab and Bitbucket are two others that are commonly used with Git. All of them have pros and cons (particularly related to pricing). For the purposes of this project, GitHub is useful since it integrates pretty seamlessly with a lot of other software.&nbsp;<a href="#ref-1">⤴️</a>

  <li id="footnote-2">The command line is a way of giving commands directly to a computer’s operating system. To give commands, you use a command line interface (CLI). This is kind of the opposite of a graphical user interface (GUI) in that there aren’t any nice buttons to push or text inputs to fill out. Mac computers come with a CLI called Terminal, and newer versions of Windows have Windows Terminal. There are a bunch of other CLIs out there, search around if you’re not satisfied with your default one.&nbsp;<a href="#ref-2">⤴️</a>

  <li id="footnote-3"><code>cd</code> stands for “change directory”. You use this command to move around your filesystem. <code>cd ..</code> navigates up a directory, <code>cd -</code> navigates to the previous directory (back), and <code>cd ~</code> navigates to your home directory. So for example to get to the Sites folder on a Mac – the default place to put this sort of thing – you would run <code>cd ~/sites</code>.&nbsp;<a href="#ref-3">⤴️</a>

  <li id="footnote-4">For more information about the command <code>git clone</code>, see <a href="https://help.github.com/en/articles/cloning-a-repository">GitHub’s documentation</a>. <code>personal-website</code> will be the name of the folder that the system creates to store all of the files in this repo; change it to whatever you want.&nbsp;<a href="#ref-4">⤴️</a>

  <li id="footnote-5">You’ll notice that the <code>/.git</code> directory starts with a full stop. That means that it is hidden folder, so it won’t show up in your normal file GUI such as Mac’s Finder. Hidden files are normally important for system purposes and can be kind of “delicate”, hence the reason for hiding them from most users. If you want to see them on a Mac, open up a Finder window and type in the shortcut <code>command + shift + .</code> <a href="#ref-5">⤴️</a>

  <li id="footnote-6"><code>npm</code> stands for Node Package Manager. It’s probably one of the most widely used platform for getting and managing dependencies. You can take a look at this site’s dependencies by looking at the <code>package.json</code> file in the root of this project. The dependencies themselves will be placed in a <code>/node_modules</code> folder. We ignore this folder using the <code>.gitignore</code> file since we don’t need to track changes in those files (that’s what <code>npm</code> is for!).&nbsp;<a href="#ref-6">⤴️</a>

  <li id="footnote-7">Static site generators take a bunch of templates and content files and compile them in to a web-ready folder of HTML, CSS, JavaScript, and media files. One of the classics is Jekyll, written in Ruby and used widely on GitHub Pages. One advantage of a static site generator over a database-driven site such as WordPress is that the loading time can be a <em>lot</em> faster. There is also a lot less to manage and worry about; there’s no risk of SQL injection since there is no database, and you don’t have to consider things like keeping PHP up-to-date since you don’t need it! On the flip side, since static sites aren’t relational, they can make more dynamic queries such as search a little tougher. <a href="https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/">Still do-able though</a>! <a href="#ref-7">⤴️</a>

  <li id="footnote-8">Updating Node.js and NPM can be a little fiddly. NVM (Node Version Manager) can be really useful for managing versions. <a href="https://duckduckgo.com/">Search online</a> for update tips that are specific to your operating system.&nbsp;<a href="#ref-8">⤴️</a>

  <li id="footnote-9">For the purposes of local development, global installation usually means it is available on your computer. This is a good thing to do for things like <code>npm</code> that you probably use often across lots of different projects. Local installation means you’re using it in the particular directory where you’ve installed it. <a href="https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/">Read more</a> <a href="#ref-9">⤴️</a>

  <li id="footnote-10">BrowserSync is a useful tool for local development and content editing with static site generators because it live-reloads the page as you change local files.&nbsp;<a href="#ref-10">⤴️</a>

  <li id="footnote-11">FTP stands for File Transfer Protocol. There are a bunch of worthwhile FTP GUIs out there such as Transmit by Panic. If connecting to your host via FTP, make sure you are on a network that you trust and try to use SFTP if possible. It is a little frowned-upon to just replace files via FTP on-the-fly, some people refer to it as going commando. That is because it introduces a bit more possibility for user error (for example, accidentally dragging something in to the wrong folder) than using a deployment tool such as Beanstalk or DeployHQ.&nbsp;<a href="#ref-11">⤴️</a>

  <li id="footnote-12">We use branches in Git to branch out from one point in the Git history and work on that in isolation. It’s particularly useful when people collaborate on a codebase together so that they don’t step on each other’s toes too much, particularly if someone is exploring something experimental or trying to fix a bug. The <code>master</code> branch is the original branch, the trunk, the one that all other branches ultimately come from. It’s a good idea to keep the <code>master</code> branch production-ready. If the repo is hooked up to something like Netlify, then this is usually the branch that Netlify watches and deploys.&nbsp;<a href="#ref-12">⤴️</a>

  <li id="footnote-13">There are a <em>lot</em> of text editors out there that are geared towards web development. Ideally, you should get one that will have a few packages / plugins available that make your life a little easier (lots of syntax highlighters, command line tools, linters, etc.). VScode, Atom, or Sublime can be good places to start. If using VScode, you should be able to open this project from the command line by running <code>code .</code> from the root of the project.&nbsp;<a href="#ref-13">⤴️</a>

</ol>

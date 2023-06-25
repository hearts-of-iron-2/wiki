# Hearts of Iron 2 wiki source code

### [Live here](https://www.hoi2bunker.com/hoi2-wiki)

Written using [NextJS](https://nextjs.org/).

---

# How to edit the content

You can edit the content locally with git and your favourite text editor or you can do it inside your browser by pressing
`DOT` `.` on your keyboard while browsing this repository on github.

All the content files are located inside the `_content` directory at the root of this project. Content is written using
[Markdown](https://www.markdownguide.org/). The meta attribute `title` (the text at the top of every file) is what gets put on the search menu.

# Styles

Styling is done with the help of [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/).
The config for both is found inside the file [tailwind.config.js](tailwind.config.js) at the root of this project.

The other styling files (css) are located inside the [styles](styles) directory and imported in the file [pages/_app.tsx](pages/_app.tsx)
like so `import "../styles/index.css";`.

### Styling the content

The file [components/markdown-styles.module.css](components/markdown-styles.module.css) is responsible for styling all the content.

### Themes

DaisyUI supports many themes, but they are all disabled in the tailwind config so that the site can be embedded in a transparent iFrame.

# Deployments

Currently the site gets automatically deployed on every commit to
[gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
using github workflows. The file [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) describes the process.

# Running locally

You can run the dev server using node and npm/pnpm by following these steps:

1. Install [git](https://git-scm.com/) and [NodeJS](https://nodejs.dev/en/).
2. Run `git clone https://github.com/Heartsofiron2/hoi2-wiki` inside your terminal.
3. After cloning, run `cd hoi2-wiki` to enter the project directory.
4. Run `npm i` to install all dependencies.
5. Run `npm run dev` to run the development server.

This should start a server on `localhost:3000`.


[encharm-github-url]: https://github.com/encharm
[font-awesome-svgs-url]: https://github.com/encharm/Font-Awesome-SVG-PNG
[font-awesome-url]: http://fortawesome.github.io/Font-Awesome
[node-url]: https://nodejs.org
[npm-url]: https://npmjs.org
[postcss-url]: https://github.com/postcss/postcss
[theme-json-url]: /theme.json

# org-minmal-html-theme

> Simple and beautiful orgmode theme

## Theme customization

There are a few options available to customize the theme at build time.

| Option | Description |
| --- | --- |
| `table-of-contents` | Whether or not to display the table of contents |
| `section-numbers` | Whether or not to display section numbers |
| `postamble` | Whether or not to display the postamble |
| `fancy-lists` | Whether or not to use GitHub-like task lists with checkboxes |
| `fancy-icons` | Whether or not to use icons to enhance the theme |
| `back-to-top` | Whether or not to add the "back to top" button |

All these options are easily configurable by editing the [`theme.json`][theme-json-url] file.

## Development

### Requirements

You'll need [Node.js][node-url] (`>= 4`) and [npm][npm-url] (`>= 2.14`).

```sh
$ # Easiest way to install it on OSX is via Homebrew
$ brew update && brew install node
```

### Setup

```sh
$ # Install npm dependencies
$ npm i
$ # Start development mode
$ npm start
```

### Tasks

The setup is based entirely in npm scripts.

| Command | Description |
| --- | --- |
| `build` | Build assets and then compress them all |
| `compress-scripts` | Generates an optimized JavaScript bundle under `dist/bundle.min.js` |
| `compress-styles` | Generates an optimized CSS bundle under `dist/bundle.min.css` |
| `compress` | Compress assets in parallel |
| `lint` | Lint CSS code |
| `server` | Startup a local development server with live reload enabled |
| `start` | Trigger file watching and startup a local development server |
| `styles` | Build styles source to a distribution bundle under `dist/bundle.css` |
| `scripts` | Build scripts to a distribution bundle under `dist/bundle.js` |
| `themes` | Run scripts and styles pre processing in parallel |
| `watch` | Watch for file changes and then recompile what's changed |

### File structure

```
.
├── dist
│   └── bundle.min.css
│   └── bundle.min.js
├── .stylelintrc
├── index.html
├── postcss.json
├── package.json
├── theme.json
└── tools
    └── build-scripts.js
    └── build-styles.js
└── src
    └── styles
    └── scripts
```

| Entry | Description |
| --- | --- |
| `dist` | Distribution folder |
| `dist/bundle.min.css` | Optimized CSS bundle |
| `dist/bundle.min.js` | Optimized JavaScript bundle |
| `.stylelintrc` | CSS linter configuration |
| `index.html` | Simple HTML page to test theme features |
| `postcss.json` | [PostCSS][postcss-url] configuration file |
| `package.json` | [npm][npm-url] manifest |
| `theme.json` | Theme configuration options |
| `tools` | Custom build scripts |
| `tools/build-scripts.js` | Injects theme configuration options to the distribution script file |
| `tools/build-styles.js` | Pre process CSS files and build the project w/ theme configuration options |
| `src` | Source code |

## Icons

All the icons we use are provided by [Font Awesome][font-awesome-url]. Big shout out to [**@encharm**][encharm-github-url] for taking the time to export them all to SVG files.

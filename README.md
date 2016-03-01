[autoprefixer-url]: https://github.com/postcss/autoprefixer
[demo-url]: http://orgmode-minimal-theme.surge.sh
[encharm-github-url]: https://github.com/encharm
[font-awesome-svgs-url]: https://github.com/encharm/Font-Awesome-SVG-PNG
[font-awesome-url]: http://fortawesome.github.io/Font-Awesome
[node-url]: https://nodejs.org
[npm-url]: https://npmjs.org

# org-minmal-html-theme

> Simple and beautiful orgmode theme

<sup>Check out [the demo][demo-url]</sup>

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
| `start` | Trigger file watching and startup a local development server |
| `styles` | Build styles source to a distribution bundle under `dist/bundle.css` |
| `compress-styles` | Generates an optimized CSS bundle under `dist/bundle.min.css` |
| `compress-scripts` | Generates an optimized JavaScript bundle under `dist/bundle.min.js` |
| `compress` | Compress assets in parallel |
| `server` | Startup a local development server with live reload enabled |
| `watch` | Watch for file changes and then recompile what's changed |
| `lint` | Lint CSS code |

### File structure

```
.
├── dist
│   └── bundle.min.css
│   └── bundle.min.js
├── .stylelintrc
├── index.html
├── options.json
├── package.json
└── src
    └── styles
```

| Entry | Description |
| --- | --- |
| `dist` | Distribution folder |
| `dist/bundle.min.css` | Optimized CSS bundle |
| `dist/bundle.min.js` | Optimized JavaScript bundle |
| `.stylelintrc` | CSS linter configuration |
| `index.html` | Simple HTML page to test theme features |
| `options.json` | [Autoprefixer][autoprefixer-url] configuration options |
| `package.json` | [npm][npm-url] manifest |
| `src` | Source code |

## Icons

All the icons we use are provided by [Font Awesome][font-awesome-url].  
Big shout out to [@encharm][encharm-github-url] for taking the time to export them all to SVG files.

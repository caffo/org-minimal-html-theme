[encharm-github-url]: https://github.com/encharm
[font-awesome-svgs-url]: https://github.com/encharm/Font-Awesome-SVG-PNG
[font-awesome-url]: http://fortawesome.github.io/Font-Awesome
[node-url]: https://nodejs.org
[npm-url]: https://npmjs.org
[postcss-url]: https://github.com/postcss/postcss
[theme-json-url]: /theme.json
[setup-dir-url]: https://github.com/caffo/org-minimal-html-theme/tree/master/setup
[author]: http://www.rodrigofranco.com
[contributors]: https://github.com/caffo/org-minimal-html-theme/graphs/contributors
[license]: /LICENSE

# Org Minimal HTML Theme
> Simple and beautiful orgmode HTML export theme

## Sample output

![screenshot](https://dl.dropboxusercontent.com/u/8178/org-minimal.png)

* http://caffo.tizi.moe/
* http://caffo.tizi.moe/JapanTrip.html
* http://caffo.tizi.moe/2015.html



## Building your theme files

After cloning this repository, customize it as you see fit (see customization options below), before running the following:
```sh
  $ # install requirements for building
  $ npm i
  $ # actually build the files
  $ npm run build
```
From there, upload the files generated in the `dist` subdirectory somewhere and create a [setup file][setup-dir-url] pointing to the URL of your theme files.


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
| `collection` | Configuration for the collection module that is added to the content top |
| `collection.enable` | Whether or not to display the collection |
| `collection.avatar` | Optional avatar URL to be displayed alongside the title<sup>1</sup> (if none is passed, it will not be added) |
| `collection.title` | Collection title |
| `collection.url` | Optional URL for the collection link (defaults to `/`) |

<small>1. 35x35 is recommended</small>

All these options are easily configurable by editing the [`theme.json`][theme-json-url] file.

## Installing the theme

Follow the examples available in the [setup][setup-dir-url] directory, to create your own setup files. After that, you can either:

copy the “setup file” of the chosen theme to the directory of your Org files,

    #+SETUPFILE: theme-minimal.setup

or

use the (relative or absolute) path to the “setup file” (in your Git local repository)

    #+SETUPFILE: path/to/Git/repo/setup/theme-minimal.setup

Then export your Org mode file to HTML with org-html-export-to-html or with C-c C-e h h.

## Icons

All the icons we use are provided by [Font Awesome][font-awesome-url]. Big shout out to [**@encharm**][encharm-github-url] for taking the time to export them all to SVG files.

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
| `lint` | Lint source code |
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

## License

[MIT][license] © [Rodrigo Franco][author] et [all][contributors].

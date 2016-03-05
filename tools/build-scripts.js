'use strict';

/**
 * Pre process script files and inject theme configuration into the main script
 * file so rules can be applied on the fly.
 */

const fs = require('fs');
const theme = require('../theme.json');
const themeAsJSON = JSON.stringify(theme);
const path = require('path').resolve;
const scriptsPath = `${__dirname}/../src/scripts`;
const distPath = `${__dirname}/../dist`;
const output = `${distPath}/bundle.js`;
const buffer = fs.createWriteStream(output);
const script = fs.readFileSync(`${scriptsPath}/index.js`, 'utf8');
const pragma = /\/\*{{options}}\*\//gm;

buffer.write(script.replace(pragma, `,${themeAsJSON}`));

buffer.end(() => {
  console.log(`${path(output)} updated`);
});

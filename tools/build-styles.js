'use strict';

/**
 * Pre process style files and setup theme features based on `theme.json`
 * configuration options.
 */

const fs = require('fs');
const path = require('path').resolve;
const theme = require('../theme.json');
const stylesPath = `${__dirname}/../src/styles`;
const output = `${stylesPath}/theme.css`;
const buffer = fs.createWriteStream(output);

/**
 * If a feature is turned off it will look for a css file under
 * `theme/feature-name.css` with rules for disabling it.
 */

Object.keys(theme)
  // Disabled features only
  .filter(feature => theme.hasOwnProperty(feature) && !theme[feature])
  .forEach(feature => {
    const rules = `${stylesPath}/theme/${feature}.css`;
    const hasRules = fs.existsSync(rules);
    const contents = hasRules ? fs.readFileSync(rules, 'utf8') : '';

    buffer.write(contents);
  });

buffer.end(() => {
  console.log(`${path(output)} updated`);
});

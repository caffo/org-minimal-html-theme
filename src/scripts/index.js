/* eslint-disable no-script-url,padded-blocks,spaced-comment */
(function (exports, options) {
  'use strict';

  var win = exports;
  var doc = exports.document;

  // Just so we can test without having to build theme options
  if (!options) {
    options = {};
  }

  // Query selector helper
  function $(selector) {
    var lookup = doc.querySelectorAll(selector);
    return [].slice.call(lookup);
  }

  // Load fonts asynchronously to avoid render blocking
  function setupFonts() {
    // Font settings
    win.WebFontConfig = {
      google: {
        families: [
          'Open+Sans:400:latin',
          'PT+Serif:400,400italic:latin'
        ]
      }
    };

    // Straight from Google Fonts usage code snippet
    var wf = doc.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = doc.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  }

  // Setup checklists
  function setupChecklists() {
    // Remove `<code>` from `li.on` and `li.off`
    $('li[class^=o] code').forEach(function (node) {
      var ul = node.parentNode.parentNode;
      var li = node.parentNode;
      var code = node;
      var isChecked = li.classList.contains('on');
      var checkbox = createCheckbox(isChecked);

      // Add `checklist` class to the list
      ul.classList.add('checklist');

      // Insert a checkbox element to the list item
      li.insertBefore(checkbox, code);

      // Remove code node
      code.remove();
    });
  }

  // Setup task lists
  function setupTasklists() {
    $('.done, .todo').forEach(function (node) {
      var container = node.parentNode;
      var status = node;
      var isChecked = node.classList.contains('done');
      var checkbox = createCheckbox(isChecked);

      // Add `checklist` class to the task container
      container.insertBefore(checkbox, status);

      // Remove task node
      status.remove();
    });
  }

  // Creates a simple checkbox element
  // isChecked: Whether or not it should display checked
  function createCheckbox(isChecked) {
    var checkbox = doc.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('disabled', 'disabled');

    if (isChecked) {
      checkbox.setAttribute('checked', 'checked');
    }

    return checkbox;
  }

  // Add "back to top" button
  function addBackToTop() {
    var link = doc.createElement('a');
    var container = doc.querySelector('body');

    link.classList.add('back-to-top');
    link.setAttribute('href', 'javascript:scroll(0, 0);');
    link.innerHTML = '<i></i>Back to top';

    container.appendChild(link);
  }

  // Display the collection name and user avatar at the header
  function addCollection(collection) {
    var content = doc.querySelector('#content');
    var wrapper = doc.createElement('div');
    var link = doc.createElement('a');
    var avatar = doc.createElement('img');
    var title = doc.createTextNode(collection.title);
    var hasAvatar = collection.avatar && collection.avatar.length;

    wrapper.classList.add('collection');

    link.classList.add('collection-url');
    link.href = collection.url || '/';

    avatar.classList.add('collection-avatar');
    avatar.src = collection.avatar;
    avatar.alt = collection.title;

    if (hasAvatar) {
      link.appendChild(avatar);
    }

    link.appendChild(title);
    wrapper.appendChild(link);
    content.insertBefore(wrapper, content.firstChild);
  }

  function bootstrap() {
    // Bootstrap fonts
    setupFonts();

    // Bootstrap lists
    if (options['fancy-lists']) {
      setupChecklists();
      setupTasklists();
    }

    // Bootstrap "back to top"
    if (options['back-to-top']) {
      addBackToTop();
    }

    if (options['collection'].enabled) {
      addCollection(options.collection);
    }
  }

  // Hold bootstrap until document body is parsed
  exports.onload = bootstrap;

})(window/*{{options}}*/);

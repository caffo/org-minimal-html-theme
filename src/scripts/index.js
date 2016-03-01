(function (exports) {
  'use strict';

  // Query selector helper
  function $(selector) {
    var lookup = exports.document.querySelectorAll(selector);
    return [].slice.call(lookup);
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
    $('span.done, span.todo').forEach(function (node) {
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
    var checkbox = exports.document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('disabled', 'disabled');

    if (isChecked) {
      checkbox.setAttribute('checked', 'checked');
    }

    return checkbox;
  }

  setupChecklists();
  setupTasklists();
})(window);

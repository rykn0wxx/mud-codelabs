(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    var jQuery = window.jQuery;
    if (jQuery === undefined) {
      try {
        jQuery = require('jquery');
      } catch (e) {
        if (!jQuery) throw new Error('jQuery dependency not found');
      }
    }
    factory(root, exports, jQuery);
  } else {
    factory(root, (root.jQuery || root.Zepto || root.ender || root.$));
  }
}(this, function () {
  'use strict';

}));

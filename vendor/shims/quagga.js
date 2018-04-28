(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['quagga'],
      __esModule: true,
    };
  }

  define('quagga', [], vendorModule);
})();

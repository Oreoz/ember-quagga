'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-quagga',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/quagga.js');
    this.import('vendor/shims/quagga.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.dirname(require.resolve('quagga/dist/quagga.js')), {
      files: ['quagga.js'],
    });

    return new MergeTrees([vendorTree, momentTree]);
  }
};

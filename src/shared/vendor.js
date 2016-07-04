'use strict';

module.exports = function () {
  /* Styles */
  //require('../index.scss');
  //require('../../node_modules/mdi/scss/materialdesignicons.scss');
  //require('../../node_modules/node-lumx/dist/scss/_lumx.scss');
  /* JS */
  global.$ = global.jQuery = require('jquery');   // $ for Lumx, jQuery for velocity
  //require('velocity-animate');
  require('angular');
  //global.moment = require('moment');            // for LumX
  //require('imports?angular!../bower_components/lumx/dist/lumx.js');
  //require('node-lumx');
};
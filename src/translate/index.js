if (!window.Intl) {
	window.Intl = require('intl');
	require('intl/locale-data/jsonp/en-US.js');
	require('intl/locale-data/jsonp/es-MX.js');
}

var IntlRealtiveFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRealtiveFormat('es');

var es = require('./es-MX');
var en = require('./en-US');

var MESSAGES = {};
MESSAGES['es-MX'] = es;
MESSAGES['en-US'] = en;

var locale = localStorage.locale || 'es-MX';

module.exports = {
  message: function (text, opts) {
    opts = opts || {};
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
    return msg.format(opts); 
  },
  date: new IntlRelativeFormat(locale)
}





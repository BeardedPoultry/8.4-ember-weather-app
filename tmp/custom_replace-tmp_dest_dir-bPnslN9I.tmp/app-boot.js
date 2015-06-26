/* jshint ignore:start */

define('untitled-folder/config/environment', ['ember'], function(Ember) {
  var prefix = 'untitled-folder';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("untitled-folder/tests/test-helper");
} else {
  require("untitled-folder/app")["default"].create({"name":"untitled-folder","version":"0.0.0.514c8b51"});
}

/* jshint ignore:end */

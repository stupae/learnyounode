// Generated by CoffeeScript 1.9.2
(function() {
  var find;

  find = require('./ex6module.js');

  find(process.argv[2], process.argv[3], function(err, files) {
    return files.forEach(function(file) {
      return console.log(file);
    });
  });

}).call(this);
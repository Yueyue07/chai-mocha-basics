exports = module.exports = {};

exports.parse = function(args,defaults) {
  var options = {};
  if(typeof defaults === 'object' && !(defaults instanceof Array)){
    options = defaults;
  }
  args.forEach(function(arg) {
    if(arg.substr(0,2) === '--'){
      arg = arg.substr(2);
      if(arg.indexOf('=') !== -1){
        arg = arg.split('=');
        var key = arg.shift();
        var value = arg.join('=');
        if(/^[0-9]+$/.test(value)){
          value = parseInt(value,10);
        }
        options[key] = value;
      }
    }
  });

  return options;
};

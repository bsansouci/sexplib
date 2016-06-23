// Hack taken from http://krasimirtsonev.com/blog/article/Fun-playing-with-npm-dependencies-and-postinstall-script
var deps = ['OcamlCppo'], index = 0;
(function doWeHaveAllDeps() {
  if(index === deps.length) {
    var cppo = require('OcamlCppo');
    cppo('-n', 'src/pre_sexp.ml', '-o', 'src/pre_sexp.ml');
    return;
  } else if(isModuleExists(deps[index])) {
    index += 1;
    doWeHaveAllDeps();
  } else {
    setTimeout(doWeHaveAllDeps, 500);
  }
})();

function isModuleExists( name ) {
  try { return !!require.resolve(name); }
  catch(e) { return false }
}

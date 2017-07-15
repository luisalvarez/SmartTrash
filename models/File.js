const fs = require("fs");

const readFiles = function (dirname, onFileContent, onError, onEnd) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    filenames.forEach(function (filename, idx, array) {
      fs.readFile(dirname + filename, 'utf-8', function (err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
        if (idx === array.length - 1){ 
	       onEnd();
	    }
      });
    });
  });
}

module.exports = readFiles;
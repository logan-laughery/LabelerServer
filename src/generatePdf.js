const htmlPdf = require('html-pdf');

const htmlText = '<html><body><img style="width: 200px" src="holder"/></body></html>';
exports.generatePdf = (base64Stream, callback) => {
  htmlPdf.create(htmlText.replace(/holder/g, base64Stream))
    .toBuffer(callback);
};

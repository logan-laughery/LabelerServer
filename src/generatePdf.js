const htmlPdf = require('html-pdf');

const htmlText = '<html><body><img src="holder"/></body></html>';
exports.generatePdf = (base64Stream, callback) => {
  htmlPdf.create(htmlText.replace(/holder/g, base64Stream))
    .toBuffer(callback);
};

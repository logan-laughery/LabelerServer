const htmlPdf = require('html-pdf');
const defaultHtml = require('../assets/default.js');
const htmlText = defaultHtml.content;

var options = { format: 'Letter' };

exports.generatePdf = (base64Stream, callback) => {
  htmlPdf.create(htmlText.replace(/holder/g, base64Stream), options)
    .toBuffer(callback);
};

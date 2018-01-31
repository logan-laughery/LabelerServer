'use strict';
const pdfGenerator = require('./src/generatePdf.js');
/**
 * HTTP Cloud Function.
 * 
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 **/
exports.getPdf = (req, res) => {
  pdfGenerator.generatePdf(req.body.image, (err, data) => {
    //res.send(data);
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=some_file.pdf',
      'Content-Length': data.length
    });
    res.end(data);
  });
};

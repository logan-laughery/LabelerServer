'use strict';
const pdfGenerator = require('./src/generatePdf.js');
const cors = require("cors");

/**
 * HTTP Cloud Function.
 * 
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 **/
exports.getPdf = (req, res) => {
  /**if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'GET, POST')
      .set('Access-Control-Expose-Headers', 'Content-Disposition')
      .status(200);
    return;
  }**/
  var corsFn = cors({ origin: true, exposedHeaders: 'Content-Disposition' });
  corsFn(req, res, function() {
    pdfGenerator.generatePdf(req.body.image, (err, data) => {
      //res.send(data);
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=some_file.pdf',
        'Content-Length': data.length
      });
      res.end(data);
    });
  });
};

'use strict';
const pdfGenerator = require('./src/generatePdf.js');
const cors = require("cors");
const creds = require('./creds.js');

function hasValidCreds(user, pass) {
  if (!creds.user || !creds.pass) {
    console.log('Add a ./creds.js file for auth config');
    return false;
  } else if (creds.user !== user) {
    return false;
  } else if (creds.pass !== pass) {
    return false
  }

  return true;
}

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
    if (!hasValidCreds(req.body.user, req.body.pass)) {
      console.log('Invalid access attempted!');
      res.status(403);
      res.send('Invalid access attempt');
      return;
    }

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

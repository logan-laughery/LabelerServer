// exports.content = 
// `
// <html>
//   <head>
//     <style>
//       html {
//         width: 100%;
//       }

//       img {
//         width: 500px;
//         margin: 0 auto;
//       }
//     </style>
//   </head>
//   <body style="width: 100%;height: 100%;display:  flex;flex-direction:  column;">
//     <img src="holder">
//     <img src="holder" style="margin-top: 50px;">
//   </body>
// </html>
// // `;
// exports.content = 
// `
// <html>
//   <head>
//     <meta charset="utf8">
//     <title>Default Labeler Template</title>
//     <style>
//       html, body {
//         margin: 0;
//         padding: 0;
//         -webkit-print-color-adjust: exact;
//         box-sizing: border-box;
//       }

//       .page {
//         position: relative;
//         width: 215.9mm;
//         height: 279.4mm;
//         display: block;
//         page-break-after: auto;
//         overflow: hidden;
//       }

//       img {
//         width: 200mm;
//         margin: 0 auto;
//       }

//       @media print {
//         body {
//           background: white;
//         }

//         .page {
//           margin: 0;
//           height: 100%;
//           width: 100%;
//         }
//       }
//     </style>
//   </head>
//   <body>
//     <div class="page">
//       <img src="holder">
//       <img src="holder" style="margin-top: 50px;">
//     </div>
//   </body>
// </html>
// `;
exports.content = 
`
<html>
  <head>
    <style>
      html {
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact;
        box-sizing: border-box;
        height: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        margin: 0 auto;
        -webkit-print-color-adjust: exact;
        display:block;
        width: 150mm;
        padding-top: 10mm;
        padding-bottom: 10mm;
      }

      img {
        width: 120mm;
        margin: 0 auto;
        margin-bottom: 10mm;
        display: block;
        page-break-after: auto;
        overflow: hidden;
        position: relative;
      }

      .page {
        width: 100%;
        height: 100%;
        position:relative;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <img src="holder" style="top: 0px">
      <img src="holder" style="bottom: 0px">
    </div>
  </body>
</html>
`;

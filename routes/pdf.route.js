const express = require('express');
const router = express.Router();
const pdfController = require('../controller/pdf.controller'); // Import the controller
const generatepdfController = require('../controller/genratepdfController');
const generatepdfControllerTwo = require('../controller/genratepdfControllerTwo');
// Route to generate static PDF
router.post('/generate-static-pdf', generatepdfController.generateStaticPdf);
router.get('/getall-pdf', generatepdfController.getAllPdfs);
router.get('/download-pdf/:id', generatepdfController.getPdfById); // This will handle the GET request for downloading PDF
router.put('/update-pdf-date', pdfController.updatePdfDate);
// Route to check if a PDF already exists for a specific entity or user
router.get('/check-pdf', pdfController.checkExistingPdf);
router.delete('/delete-pdf/:id', generatepdfController.deletePdfById);


router.post('/generate-static-pdf-two', generatepdfControllerTwo.generateStaticPdfTwo);
router.get('/getall-pdf-two', generatepdfControllerTwo.getAllPdfs);
router.get('/download-pdf-two/:id', generatepdfControllerTwo.getPdfByIdTwo); // This will handle the GET request for downloading PDF
router.put('/update-pdf-date-two', generatepdfControllerTwo.updatePdfDate);
// // Route to check if a PDF already exists for a specific entity or user
router.get('/check-pdf-two', generatepdfControllerTwo.checkExistingPdf);
router.delete('/delete-pdf-two/:id', generatepdfControllerTwo.deletePdfById);
module.exports = router;

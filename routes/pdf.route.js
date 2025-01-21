const express = require('express');
const router = express.Router();
const pdfController = require('../controller/pdf.controller'); // Import the controller
const generatepdfController = require('../controller/genratepdfController');
// Route to generate static PDF
router.post('/generate-static-pdf', generatepdfController.generateStaticPdf);
router.get('/download-pdf/:id', generatepdfController.getPdfById); // This will handle the GET request for downloading PDF
router.put('/update-pdf-date', pdfController.updatePdfDate);
// Route to check if a PDF already exists for a specific entity or user
router.get('/check-pdf', pdfController.checkExistingPdf);
module.exports = router;

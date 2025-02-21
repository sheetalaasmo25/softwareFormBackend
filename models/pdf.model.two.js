const mongoose = require('mongoose');

const PdfTwoSchema = new mongoose.Schema({
    pdfName: { type: String, required: true },
    date: { type: String, required: false },
    pdfBuffer: {
        type: Buffer,  // This is a single buffer
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const PDFTWO = mongoose.model('PDFTWO', PdfTwoSchema);

module.exports = PDFTWO;

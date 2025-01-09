const mongoose = require('mongoose');

const PdfSchema = new mongoose.Schema({
   
    date: { type: String, required: false },
  
    pdfBuffer: { type: Buffer, required: true },  // Store PDF as a binary buffer
    createdAt: { type: Date, default: Date.now },
});

const PDF = mongoose.model('PDF', PdfSchema);

module.exports = PDF;

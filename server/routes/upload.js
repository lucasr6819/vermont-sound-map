const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

// File upload route
router.post('/', upload.single('audio'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        res.status(200).json({
            message: 'File uploaded successfully',
            file: {
                filename: req.file.filename,
                path: `/audio_files/${req.file.filename}`,
                size: req.file.size,
                mimetype: req.file.mimetype
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Error uploading file' });
    }
});

module.exports = router;

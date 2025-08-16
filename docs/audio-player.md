# Audio Player Implementation Guide

## Google Drive Audio Player Integration

### JavaScript Implementation
```javascript
function createAudioPlayer(sound) {
    const fileId = sound.audioUrl.match(/\/d\/(.*?)\/view/)?.[1];
    return `
        <div class="audio-container">
            <iframe 
                src="https://drive.google.com/file/d/${fileId}/preview" 
                class="audio-frame"
                allow="autoplay"
                frameborder="0">
            </iframe>
        </div>
    `;
}
```

### Required CSS
```css
.audio-container {
    margin: 15px 0;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.audio-frame {
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 4px;
    background: #fff;
}

.custom-popup .leaflet-popup-content {
    min-width: 300px;
    margin: 13px;
}
```

### Setup Instructions

1. Google Drive File Setup:
   - Upload audio file to Google Drive
   - Set sharing to "Anyone with the link can view"
   - Copy the sharing link (format: https://drive.google.com/file/d/[FILE_ID]/view)

2. Implementation Steps:
   - Extract file ID from Google Drive URL
   - Use Google Drive's preview endpoint
   - Embed in an iframe for reliable playback

3. Key Features:
   - Native Google Drive player controls
   - Automatic format handling
   - Reliable streaming
   - No need for external audio players

### Usage Example
```javascript
const sound = {
    audioUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
    // ... other sound data
};

// In your marker popup content
const popupContent = `
    <div class="popup-content">
        ${createAudioPlayer(sound)}
    </div>
`;
```

### Troubleshooting
- If audio doesn't play, check file sharing settings in Google Drive
- Ensure popup width is sufficient (min 300px recommended)
- Check browser console for any iframe loading errors
- Verify that the Google Drive file ID is correctly extracted

### Benefits of this Approach
- More reliable than direct audio streaming
- Uses Google's official embed functionality
- Works across different browsers and devices
- Handles audio format compatibility automatically
- No need for external audio libraries

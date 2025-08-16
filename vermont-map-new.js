// Vermont Sound Map JavaScript

// Initialize the map
let map = L.map('map').setView([43.8991, -72.5498], 8);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

    // Initialize map features
    setupMarkers();
    setupSearch();
});

function setupMarkers() {
    // Add markers for each sound location
    vermontSounds.forEach(sound => {
        const marker = L.marker([sound.location.lat, sound.location.lng])
            .bindPopup(createPopupContent(sound))
            .addTo(map);
            
        markers.set(sound.id, marker);
    });
}

function createPopupContent(sound) {
    return `
        <div class="sound-popup">
            <h3>${sound.title}</h3>
            <p>${sound.description}</p>
            <div class="tags">
                ${sound.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="audio-container">
                ${createAudioPlayer(sound)}
            </div>
        </div>
    `;
}

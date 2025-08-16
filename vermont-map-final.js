(function() {
    // --- Global Variables ---
    let map;
    const allMarkers = new L.FeatureGroup(); // Use a FeatureGroup to manage markers
    let heatLayer;
    let heatMapVisible = false;

    // --- Constants ---
    const VT_CENTER = [44.0886, -72.7317];

    // --- Main Initialization ---
    function initializeMap() {
        // 1. Create the map
        map = L.map('map', {
            center: VT_CENTER,
            zoom: 8,
            minZoom: 7,
            maxZoom: 18
        });

        // 2. Add the base tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        console.log("Map initialized. Loading data...");

        // 3. Load data and create map layers
        initializeDataLayers();

        // 4. Set up the heatmap layer
        initializeHeatMap();

        // 5. Initialize UI controls
        initializeUI();
    }

    // --- Data and Layer Initialization ---
    function initializeDataLayers() {
        // Load the original sound data
        if (typeof vermontSounds !== 'undefined' && Array.isArray(vermontSounds)) {
            console.log("Found vermontSounds data. Count:", vermontSounds.length);
            vermontSounds.forEach(sound => {
                if (sound.location) {
                    const marker = createOriginalSoundMarker(sound);
                    allMarkers.addLayer(marker);
                }
            });
        } else {
            console.error("Original vermontSounds data is not loaded or invalid.");
        }

        // Load the new sound pollution data
        if (typeof vermont_sound_pollution_dataset !== 'undefined' && vermont_sound_pollution_dataset.locations) {
            console.log("Found vermont_sound_pollution_dataset. Count:", vermont_sound_pollution_dataset.locations.length);
            vermont_sound_pollution_dataset.locations.forEach(location => {
                if (location.coordinates && location.coordinates.length === 2) {
                    const marker = createLocationMarker(location);
                    allMarkers.addLayer(marker);
                }
            });
        } else {
            console.error("New sound pollution data is not loaded or invalid.");
        }

        console.log("Total markers in FeatureGroup:", allMarkers.getLayers().length);

        // Add the markers to the map by default
        map.addLayer(allMarkers);
    }

    function initializeHeatMap() {
        if (typeof vermont_sound_pollution_dataset === 'undefined') {
            console.error("Cannot initialize heatmap, dataset not found.");
            return;
        }

        const heatPoints = vermont_sound_pollution_dataset.locations
            .filter(l => l.coordinates && l.coordinates.length === 2)
            .map(l => [...l.coordinates, parseNoiseLevel(l.noise_level)]);

        heatLayer = L.heatLayer(heatPoints, {
            radius: 35,
            blur: 25,
            maxZoom: 17,
            max: 0.8,
            gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' }
        });
    }

    // --- UI Initialization and Handlers ---
    function initializeUI() {
        // Hide old/unused controls for clarity
        const audioPointsBtn = document.getElementById('toggle-audio-points');
        if (audioPointsBtn) audioPointsBtn.style.display = 'none';
        
        const infoPointsBtn = document.getElementById('toggle-info-points');
        if (infoPointsBtn) infoPointsBtn.style.display = 'none';

        // Setup heatmap toggle button
        const toggleHeatMapBtn = document.getElementById('toggle-heat-map');
        if (toggleHeatMapBtn) {
            toggleHeatMapBtn.addEventListener('click', toggleHeatMap);
        }

        // Setup modal close buttons
        const modalCloseBtn = document.getElementById('modal-close-btn');
        if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

        const modalContainer = document.getElementById('modal-container');
        if(modalContainer) modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeModal();
            }
        });
    }

    function toggleHeatMap() {
        const btn = document.getElementById('toggle-heat-map');
        heatMapVisible = !heatMapVisible;
        btn.classList.toggle('active', heatMapVisible);

        if (heatMapVisible) {
            map.removeLayer(allMarkers);
            map.addLayer(heatLayer);
        } else {
            map.removeLayer(heatLayer);
            map.addLayer(allMarkers);
        }
    }

    // --- Marker and Popup Creation ---

    // For original vermontSounds data
    function createOriginalSoundMarker(sound) {
        const marker = L.marker([sound.location.lat, sound.location.lng], {
            title: sound.title,
            riseOnHover: true
        });

        const popupContent = `
            <div class="sound-popup">
                <h3>${sound.title}</h3>
                <p>${sound.description}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 400,
            className: 'custom-popup'
        });

        return marker;
    }

    // For new vermont_sound_pollution_dataset
    function createLocationMarker(location) {
        const [lat, lng] = location.coordinates;
        const intensity = parseNoiseLevel(location.noise_level);

        const marker = L.circleMarker([lat, lng], {
            radius: 6 + intensity * 4,
            fillColor: getMarkerColor(location.type),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8,
            title: location.name
        });

        marker.bindTooltip(`<strong>${location.name}</strong><br><small>${location.type}</small>`);
        
        marker.on('click', () => {
            const popupContent = createLocationPopup(location);
            openModal(popupContent);
        });

        return marker;
    }

    function createLocationPopup(location) {
        return `
            <div class="custom-popup-content">
                <h3>${location.name}</h3>
                <p><strong>Type:</strong> ${location.type}</p>
                <p><strong>Noise Level:</strong> ${location.noise_level}</p>
                <p>${location.base_noise_description || 'No further description available.'}</p>
            </div>
        `;
    }

    // --- Modal Controls ---
    function openModal(content) {
        const modalBody = document.getElementById('modal-body');
        const modalContainer = document.getElementById('modal-container');
        if (modalBody && modalContainer) {
            modalBody.innerHTML = content;
            modalContainer.classList.add('show');
        }
    }

    function closeModal() {
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer) {
            modalContainer.classList.remove('show');
        }
    }

    // --- Utility Functions ---
    function parseNoiseLevel(noiseLevel) {
        if (!noiseLevel) return 0.1;
        const level = noiseLevel.toLowerCase();
        if (level.includes('very high')) return 1.0;
        if (level.includes('high')) return 0.8;
        if (level.includes('moderate-high')) return 0.6;
        if (level.includes('moderate')) return 0.4;
        if (level.includes('low')) return 0.2;
        return 0.1;
    }

    function getMarkerColor(type) {
        if (!type) return '#AAAAAA';
        const t = type.toLowerCase();
        if (t.includes('aviation')) return '#FF4136'; // Red
        if (t.includes('industrial') || t.includes('quarry')) return '#FF851B'; // Orange
        if (t.includes('transportation') || t.includes('highway') || t.includes('rail')) return '#0074D9'; // Blue
        if (t.includes('construction')) return '#FFDC00'; // Yellow
        if (t.includes('wind')) return '#2ECC40'; // Green
        return '#AAAAAA'; // Gray for others
    }

    // --- Start the Application ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMap);
    } else {
        initializeMap();
    }
})();

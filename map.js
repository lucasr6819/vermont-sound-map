let audioContext;
let currentVisualizer;
let map;
let isComparing = false;
let compareData = {
    first: null,
    second: null
};

const audioRecordingsData = [
    {
        "id": "recording_1",
        "recordingName": "In between the University Library & The welcome center",
        "locationName": "In between the University Library & The welcome center at Mcgill University",
        "neighborhood": "Milton Park",
        "address": "Golden Square Mile, Montreal, QC H3A 2K6",
        "coordinates": {
            "latitude": 45.503383,
            "longitude": -73.576334
        },
        "dateRecorded": "2025-05-29",
        "timeStart": "17:45",
        "timeEnd": "17:46",
        "duration": {
            "formatted": "0:42",
            "seconds": 42
        },
        "fileName": "./audio_files/Inbetween.m4a",
        "recordingName": "In between the University Library & The welcome center",
        "locationName": "In between the University Library & The welcome center at Mcgill University",
        "neighborhood": "Milton Park",
        "address": "Golden Square Mile, Montreal, QC H3A 2K6",
        "coordinates": {
            "latitude": 45.503383,
            "longitude": -73.576334
        },
        "dateRecorded": "2025-05-29",
        "timeStart": "17:45",
        "timeEnd": "17:46",
        "duration": {
            "formatted": "0:42",
            "seconds": 42
        },
        "fileName": "audio_files/Inbetween.m4a",
        "fileFormat": "m4a",
        "categories": {
            "primary": "School",
            "secondary": "Hallway, passage"
        },
        "soundSources": ["Birds", "Foot steps", "Busses", "City sound", "Sniffing"],
        "description": "Quite, sound bouncing off walls, few people walking around",
        "environment": {
            "weather": "Partly Cloudy",
            "temperature": 20,
            "temperatureUnit": "C",
            "isOutside": true
        },
        "metrics": {
            "activityLevel": 3,
            "activityLevelMax": 10,
            "qualityRating": "Poor"
        },
        "recordingDevice": "iPhone 13"
    },
    {
        "id": "recording_2",
        "recordingName": "RedPath Library Entrance",
        "locationName": "RedPath Library Entrance at McGill University",
        "neighborhood": "Milton",
        "address": "845 Sherbrooke St W, Montreal, QC H3A 0G4, Canada",
        "coordinates": {
            "latitude": 45.503778,
            "longitude": -73.576691
        },
        "dateRecorded": "2025-05-29",
        "timeStart": "17:50",
        "timeEnd": "17:52:57",
        "duration": {
            "formatted": "2:57",
            "seconds": 177
        },
        "fileName": "./audio_files/redpathlibraryent.m4a",
        "fileFormat": "m4a",
        "categories": {
            "primary": "Entrance",
            "secondary": "Library"
        },
        "soundSources": ["Birds", "Walking", "Coughing", "Conversation", "Ding sound", "Laughing"],
        "description": "Microphone set in front of the entrance doors of the RedPath Library at Mcgill University",
        "environment": {
            "weather": "Partly Cloudy",
            "temperature": 20,
            "temperatureUnit": "C",
            "isOutside": true
        },
        "metrics": {
            "activityLevel": 2,
            "activityLevelMax": 10,
            "qualityRating": "Poor"
        },
        "recordingDevice": "iPhone 13"
    },
    {
        "id": "recording_3",
        "recordingName": "Walk to McGill",
        "locationName": "On the street near McGill College Ave",
        "neighborhood": "Downtown Montreal",
        "address": "1801 McGill College Ave Suite 1300",
        "coordinates": {
            "latitude": 45.501991,
            "longitude": -73.571033
        },
        "dateRecorded": "2025-05-29",
        "timeStart": "17:25",
        "timeEnd": "17:29",
        "duration": {
            "formatted": "4:14",
            "seconds": 254
        },
        "fileName": "./audio_files/Walktomcgill.m4a",
        "fileFormat": "m4a",
        "categories": {
            "primary": "Street",
            "secondary": "Main street"
        },
        "soundSources": ["Public Biking class", "Music", "Upbeat music", "Cars", "Bikes", "Bass", "Echoing"],
        "description": "Walking from McGill College Ave to the Roddick Gate",
        "environment": {
            "weather": "Partly Cloudy",
            "temperature": 20,
            "temperatureUnit": "C",
            "isOutside": true
        },
        "metrics": {
            "activityLevel": 7,
            "activityLevelMax": 10,
            "qualityRating": "Poor"
        },
        "recordingDevice": "iPhone 13"
    },
    {
        "id": "recording_4",
        "recordingName": "Additional Sirens",
        "locationName": "Roddick Gates",
        "neighborhood": "Milton Park",
        "address": "15a Sherbrooke St W, Montreal, Quebec H3A 3E8",
        "coordinates": {
            "latitude": 45.503892,
            "longitude": -73.574852
        },
        "dateRecorded": "2025-05-29",
        "timeStart": "17:35",
        "timeEnd": "17:35:17",
        "duration": {
            "formatted": "0:17",
            "seconds": 17
        },
        "fileName": "./audio_files/additionalsirens.m4a",
        "fileFormat": "m4a",
        "categories": {
            "primary": "Sirens",
            "secondary": "Gateway"
        },
        "soundSources": ["Ambulance", "Cars", "Walking"],
        "description": "Ambulance Sirens",
        "environment": {
            "weather": "Partly Cloudy",
            "temperature": 20,
            "temperatureUnit": "C",
            "isOutside": true
        },
        "metrics": {
            "activityLevel": 8,
            "activityLevelMax": 10,
            "qualityRating": "Poor"
        },
        "recordingDevice": "iPhone 13"
    },
    {
        "id": "recording_5",
        "recordingName": "Grocery Store",
        "locationName": "MetroPlus Wilderton",
        "neighborhood": "Glenmount",
        "address": "2871 Ave Van Horne, Montreal, QC H3S 1P6",
        "coordinates": {
            "latitude": 45.508331,
            "longitude": -73.625355
        },
        "dateRecorded": "2025-06-01",
        "timeStart": "18:47",
        "timeEnd": "19:12",
        "duration": {
            "formatted": "25:18",
            "seconds": 1518
        },
        "fileName": "./audio_files/GroceryStore.m4a",
        "fileFormat": "m4a",
        "categories": {
            "primary": "Grocery Store",
            "secondary": "Indoor Shopping"
        },
        "soundSources": [
            "Steps",
            "Shopping carts",
            "Checkout machines beeping",
            "Conversations",
            "Store announcements",
            "Refrigeration units humming",
            "Background music"
        ],
        "description": "Evening recording inside MetroPlus grocery store capturing typical shopping environment sounds",
        "environment": {
            "weather": "Indoor",
            "temperature": 22,
            "temperatureUnit": "C",
            "isOutside": false
        },
        "metrics": {
            "activityLevel": 5,
            "activityLevelMax": 10,
            "qualityRating": "Medium"
        },
        "recordingDevice": "iPhone 13"
    }
];

// Initialize map and add tile layer
function initializeMap() {
    map = L.map('map').setView([45.503383, -73.576334], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add McGill bounds polygon
    const mcgillBounds = [
        [45.505, -73.579],
        [45.501, -73.579],
        [45.501, -73.574],
        [45.505, -73.574]
    ];

    L.polygon(mcgillBounds, {
        color: '#000000',
        fillOpacity: 0.1,
        weight: 2
    }).addTo(map);

    // Initialize heat map layer
    const heatData = audioRecordingsData.map(recording => {
        // Calculate intensity based on sound activity level or use a default value
        const intensity = recording.activityLevel || 0.5;
        return [
            recording.coordinates.latitude,
            recording.coordinates.longitude,
            intensity
        ];
    });

    heatmapLayer = L.heatLayer(heatData, {
        radius: 25,
        blur: 15,
        maxZoom: 16,
        max: 1.0,
        gradient: {
            0.4: '#FED976',
            0.6: '#FEB24C',
            0.7: '#FD8D3C',
            0.8: '#FC4E2A',
            0.9: '#E31A1C'
        }
    });
}

// Helper functions
function getTimeColor(timeStr) {
    const hour = parseInt(timeStr.split(':')[0]);
    if (hour >= 5 && hour < 12) return '#2C2C2C';
    if (hour >= 12 && hour < 17) return '#666666';
    if (hour >= 17 && hour < 20) return '#999999';
    return '#000000';
}

function getQualityLabel(quality) {
    const colors = {
        poor: '#F44336',
        medium: '#FFC107',
        good: '#4CAF50'
    };
    return `<span class="quality-indicator" style="background-color: ${colors[quality]}">${quality.toUpperCase()}</span>`;
}

function updateActivityLevel(location) {
    const dots = Array(10).fill('').map((_, i) => 
        `<span class="dot ${i < location.metrics.activityLevel ? 'filled' : 'empty'}"></span>`
    ).join('');
    
    document.getElementById('activity-display').innerHTML = `
        ${location.locationName}<br/>
        <span class="activity-dots">${dots}</span>
    `;
}

// Create popup content
function createPopupContent(location) {
    const popupId = `popup-${location.id}`;
    
    return `
        <div class="popup-content">
            <div class="popup-header">${location.recordingName}</div>
            <div class="popup-info">
                <span class="popup-label">Time:</span> ${location.timeStart}<br>
                <span class="popup-label">Weather:</span> ${location.environment.weather || 'N/A'}<br>
                <span class="popup-label">Temperature:</span> ${location.environment.temperature ? location.environment.temperature + '°C' : 'N/A'}<br>
                <span class="popup-label">Activity Level:</span> ${location.metrics.activityLevel}/10<br>
                <span class="popup-label">Recording Quality:</span> ${getQualityLabel(location.metrics.qualityRating.toLowerCase())}<br>
                <span class="popup-label">Device:</span> ${location.recordingDevice || 'N/A'}<br>
                <span class="popup-label">Sounds:</span> ${location.soundSources.join(", ")}<br>
                ${location.description ? `<span class="popup-label">Description:</span> ${location.description}` : ''}
            </div>
            <div class="audio-container">
                <audio controls>
                    <source src="${location.fileName}" type="audio/mp4">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    `;
}

// Search functionality
let markers = [];

function handleSearch(query) {
    const searchResults = document.getElementById('search-results');
    if (!query) {
        searchResults.style.display = 'none';
        return;
    }

    const results = audioRecordingsData.filter(location => {
        const searchStr = query.toLowerCase();
        return location.locationName.toLowerCase().includes(searchStr) ||
               location.description?.toLowerCase().includes(searchStr) ||
               location.soundSources.some(sound => sound.toLowerCase().includes(searchStr)) ||
               location.categories.primary.toLowerCase().includes(searchStr) ||
               location.categories.secondary.toLowerCase().includes(searchStr);
    });

    if (results.length > 0) {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="focusLocation(${result.coordinates.latitude}, ${result.coordinates.longitude}, '${result.id}')">
                <strong>${result.recordingName}</strong><br>
                <small>${result.locationName}</small>
            </div>
        `).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        searchResults.style.display = 'block';
    }
}

function focusLocation(lat, lng, id) {
    map.setView([lat, lng], 17);
    const marker = markers.find(m => m.id === id);
    if (marker) {
        marker.openPopup();
    }
    document.getElementById('search-results').style.display = 'none';
}

// Filter functionality
function applyFilters() {
    const activityLevel = parseInt(document.getElementById('activity-filter').value);
    const qualityFilters = Array.from(document.querySelectorAll('#filter-panel input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    const categoryFilters = Array.from(document.querySelectorAll('#category-filters input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    markers.forEach(marker => {
        const location = marker.location;
        const visible = (
            location.metrics.activityLevel >= activityLevel &&
            (qualityFilters.length === 0 || qualityFilters.includes(location.metrics.qualityRating.toLowerCase())) &&
            (categoryFilters.length === 0 || 
             categoryFilters.includes(location.categories.primary.toLowerCase()) ||
             categoryFilters.includes(location.categories.secondary.toLowerCase()))
        );
        
        marker.setStyle({
            opacity: visible ? 1 : 0.3,
            fillOpacity: visible ? 1 : 0.1
        });
    });

    updateHeatmap(audioRecordingsData.filter(location => location.metrics.activityLevel >= activityLevel));

    togglePanel('filter-panel');
}

function applyTimeFilter() {
    const selectedTimes = Array.from(document.querySelectorAll('#time-filter input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    markers.forEach(marker => {
        const location = marker.location;
        const hour = parseInt(location.timeStart.split(':')[0]);
        let timeOfDay;
        
        if (hour >= 5 && hour < 12) timeOfDay = 'morning';
        else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
        else if (hour >= 17 && hour < 20) timeOfDay = 'evening';
        else timeOfDay = 'night';

        const visible = selectedTimes.includes(timeOfDay);
        
        marker.setStyle({
            opacity: visible ? 1 : 0.3,
            fillOpacity: visible ? 1 : 0.1
        });
    });

    updateHeatmap(audioRecordingsData.filter(location => {
        const hour = parseInt(location.timeStart.split(':')[0]);
        let timeOfDay;
        
        if (hour >= 5 && hour < 12) timeOfDay = 'morning';
        else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
        else if (hour >= 17 && hour < 20) timeOfDay = 'evening';
        else timeOfDay = 'night';

        return selectedTimes.includes(timeOfDay);
    }));

    togglePanel('time-filter');
}

// Update addMapMarkers function to store markers
function addMapMarkers(audioRecordingsData) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Create bounds to fit all markers
    const bounds = L.latLngBounds();

    audioRecordingsData.forEach(location => {
        const marker = L.circleMarker(
            [location.coordinates.latitude, location.coordinates.longitude],
            {
                radius: 8,
                fillColor: getTimeColor(location.timeStart),
                color: '#000000',
                weight: 2,
                fillOpacity: 1
            }
        ).addTo(map);

        // Store the location data with the marker
        marker.location = location;
        marker.id = location.id;
        markers.push(marker);

        // Add coordinates to bounds
        bounds.extend([location.coordinates.latitude, location.coordinates.longitude]);

        marker.on('click', () => {
            if (isComparing) {
                handleComparisonClick(location);
            } else {
                updateActivityLevel(location);
            }
        });

        marker.bindPopup(createPopupContent(location));
    });

    // Fit the map to show all markers with some padding
    if (markers.length > 0) {
        map.fitBounds(bounds, {
            padding: [50, 50]
        });
    }
}

// Comparison functionality
function handleComparisonClick(location) {
    if (!compareData.first) {
        compareData.first = location;
        document.getElementById('compare-1').innerHTML = createComparisonContent(location);
    } else if (!compareData.second && location.id !== compareData.first.id) {
        compareData.second = location;
        document.getElementById('compare-2').innerHTML = createComparisonContent(location);
        generateComparisonAnalysis();
    }
}

function createComparisonContent(location) {
    return `
        <h4>${location.recordingName}</h4>
        <p>Time: ${location.timeStart}</p>
        <p>Activity Level: ${location.metrics.activityLevel}/10</p>
        <p>Quality: ${getQualityLabel(location.metrics.qualityRating.toLowerCase())}</p>
        ${location.fileName ? `
            <div class="audio-container">
                <iframe src="${location.fileName}" 
                    allow="autoplay" 
                    width="100%" 
                    height="60">
                </iframe>
            </div>
        ` : ''}
    `;
}

function generateComparisonAnalysis() {
    if (!compareData.first || !compareData.second) return;

    const analysisReport = document.getElementById('analysisReport');
    const chartDiv = document.getElementById('comparisonChart');

    // Generate visualization using Plotly
    const trace1 = {
        x: ['Activity Level', 'Temperature'],
        y: [compareData.first.metrics.activityLevel, compareData.first.environment.temperature],
        name: compareData.first.recordingName,
        type: 'bar'
    };

    const trace2 = {
        x: ['Activity Level', 'Temperature'],
        y: [compareData.second.metrics.activityLevel, compareData.second.environment.temperature],
        name: compareData.second.recordingName,
        type: 'bar'
    };

    const layout = {
        barmode: 'group',
        title: 'Location Comparison',
        height: 400
    };

    Plotly.newPlot(chartDiv, [trace1, trace2], layout);

    // Generate text analysis
    const analysis = `
        <div class="analysis-section">
            <h4>Sound Analysis</h4>
            <div class="sound-patterns">
                <strong>Common Sounds:</strong> ${findCommonSounds(compareData.first, compareData.second).join(', ') || 'None'}
            </div>
            <div class="environmental-comparison">
                <strong>Environmental Differences:</strong>
                <ul>
                    <li>Temperature Difference: ${Math.abs(compareData.first.environment.temperature - compareData.second.environment.temperature)}°C</li>
                    <li>Time Difference: ${calculateTimeDifference(compareData.first.timeStart, compareData.second.timeStart)}</li>
                </ul>
            </div>
            <div class="activity-analysis">
                <strong>Activity Level Comparison:</strong>
                <p>Location 1 (${compareData.first.metrics.activityLevel}/10) vs Location 2 (${compareData.second.metrics.activityLevel}/10)</p>
            </div>
        </div>
    `;

    analysisReport.innerHTML = analysis;
}

function findCommonSounds(loc1, loc2) {
    return loc1.soundSources.filter(sound => loc2.soundSources.includes(sound));
}

function calculateTimeDifference(time1, time2) {
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);
    const diff = Math.abs((h1 * 60 + m1) - (h2 * 60 + m2));
    return `${Math.floor(diff/60)}h ${diff%60}m`;
}

// Panel controls
function toggleComparison() {
    isComparing = !isComparing;
    document.getElementById('comparison-panel').style.display = isComparing ? 'block' : 'none';
    if (!isComparing) {
        resetComparison();
    }
}

function togglePanel(panelId) {
    document.getElementById(panelId).classList.toggle('hide');
}

function resetComparison() {
    compareData = { first: null, second: null };
    document.getElementById('compare-1').innerHTML = 'Select first location';
    document.getElementById('compare-2').innerHTML = 'Select second location';
    document.getElementById('comparisonChart').innerHTML = '';
    document.getElementById('analysisReport').innerHTML = '';
}

// Audio playback functionality
const wavesurfers = new Map();

function initializeWaveSurfer(id, container) {
    if (wavesurfers.has(id)) {
        return wavesurfers.get(id);
    }

    const wavesurfer = WaveSurfer.create({
        container: container,
        waveColor: '#4a4a4a',
        progressColor: '#2C2C2C',
        cursorColor: '#333',
        barWidth: 2,
        barRadius: 3,
        cursorWidth: 1,
        height: 50,
        barGap: 2,
        responsive: true
    });

    wavesurfers.set(id, wavesurfer);
    return wavesurfer;
}

function togglePlay(id, audioFile) {
    const container = document.getElementById(`waveform-${id}`);
    const button = container.parentElement.querySelector('.play-button');
    const timeDisplay = container.parentElement.querySelector('.time');
    
    let wavesurfer = wavesurfers.get(id);
    
    if (!wavesurfer) {
        wavesurfer = initializeWaveSurfer(id, container);
        wavesurfer.load(audioFile);
        
        wavesurfer.on('ready', function() {
            wavesurfer.play();
            button.textContent = 'Pause';
        });

        wavesurfer.on('audioprocess', function() {
            const time = wavesurfer.getCurrentTime();
            timeDisplay.textContent = formatTime(time);
        });

        wavesurfer.on('finish', function() {
            button.textContent = 'Play';
        });
    } else {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
            button.textContent = 'Play';
        } else {
            wavesurfer.play();
            button.textContent = 'Pause';
        }
    }
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize everything when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    addMapMarkers(audioRecordingsData);
    initializeCategoryFilters();

    // Initialize activity level filter display
    const activityFilter = document.getElementById('activity-filter');
    const activityValue = document.getElementById('activity-value');
    activityFilter.addEventListener('input', () => {
        activityValue.textContent = `${activityFilter.value}+`;
    });
});

// Heatmap functionality
let heatmapLayer;
let isHeatmapVisible = false;

function toggleHeatmap() {
    if (isHeatmapVisible) {
        map.removeLayer(heatmapLayer);
        isHeatmapVisible = false;
    } else {
        if (!heatmapLayer) {
            const heatData = audioRecordingsData.map(recording => {
                // Use activity level for heat intensity
                const intensity = recording.metrics.activityLevel / 10; // Normalize to 0-1
                return [
                    recording.coordinates.latitude,
                    recording.coordinates.longitude,
                    intensity
                ];
            });

            heatmapLayer = L.heatLayer(heatData, {
                radius: 25,
                blur: 15,
                maxZoom: 16,
                max: 1.0,
                gradient: {
                    0.4: '#FED976',
                    0.6: '#FEB24C',
                    0.7: '#FD8D3C',
                    0.8: '#FC4E2A',
                    0.9: '#E31A1C'
                }
            });
        }
        heatmapLayer.addTo(map);
        isHeatmapVisible = true;
    }
}

// Update the existing applyFilters function to include heat map updates
const originalApplyFilters = window.applyFilters;
window.applyFilters = function() {
    const activityLevel = parseInt(document.getElementById('activity-filter').value);
    const qualityFilters = Array.from(document.querySelectorAll('#filter-panel input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    const categoryFilters = Array.from(document.querySelectorAll('#category-filters input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    // Filter the data
    const filteredData = audioRecordingsData.filter(location => {
        return (
            location.metrics.activityLevel >= activityLevel &&
            (qualityFilters.length === 0 || qualityFilters.includes(location.metrics.qualityRating.toLowerCase())) &&
            (categoryFilters.length === 0 || 
             categoryFilters.includes(location.categories.primary.toLowerCase()) ||
             categoryFilters.includes(location.categories.secondary.toLowerCase()))
        );
    });

    // Update markers
    markers.forEach(marker => {
        const location = marker.location;
        const visible = filteredData.some(loc => loc.id === location.id);
        marker.setStyle({
            opacity: visible ? 1 : 0.3,
            fillOpacity: visible ? 1 : 0.1
        });
    });

    // Update heat map if it's visible
    if (isHeatmapVisible) {
        map.removeLayer(heatmapLayer);
        const heatData = filteredData.map(location => [
            location.coordinates.latitude,
            location.coordinates.longitude,
            location.metrics.activityLevel / 10
        ]);
        heatmapLayer = L.heatLayer(heatData, {
            radius: 25,
            blur: 15,
            maxZoom: 16,
            max: 1.0,
            gradient: {
                0.4: '#FED976',
                0.6: '#FEB24C',
                0.7: '#FD8D3C',
                0.8: '#FC4E2A',
                0.9: '#E31A1C'
            }
        });
        heatmapLayer.addTo(map);
    }

    togglePanel('filter-panel');

    // Upload functionality
let selectedLocation = null;

map.on('click', function(e) {
    if (document.getElementById('upload-panel').classList.contains('hide')) {
        return;
    }
    selectedLocation = e.latlng;
    document.getElementById('selected-location').textContent = 
        `Latitude: ${selectedLocation.lat.toFixed(6)}, Longitude: ${selectedLocation.lng.toFixed(6)}`;
});

async function handleAudioUpload() {
    if (!selectedLocation) {
        alert('Please click on the map to select a location');
        return;
    }

    const title = document.getElementById('sound-title').value;
    const description = document.getElementById('sound-description').value;
    const category = document.getElementById('sound-category').value;
    const quality = document.getElementById('sound-quality').value;
    const audioFile = document.getElementById('audio-file').files[0];
    const driveLink = document.getElementById('drive-link').value;

    if (!title || (!audioFile && !driveLink)) {
        alert('Please fill in the title and provide either an audio file or Drive link');
        return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('quality', quality);
    formData.append('latitude', selectedLocation.lat);
    formData.append('longitude', selectedLocation.lng);
    
    if (audioFile) {
        formData.append('audio', audioFile);
    } else {
        formData.append('audioUrl', driveLink);
    }

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if (response.ok) {
            // Add new marker to the map
            addMarker({
                latitude: selectedLocation.lat,
                longitude: selectedLocation.lng,
                audioUrl: data.file ? data.file.path : driveLink,
                title: title,
                description: description,
                category: category,
                quality: quality,
                timestamp: new Date().toISOString()
            });

            // Clear form and close panel
            clearUploadForm();
            togglePanel('upload-panel');
            alert('Sound location added successfully!');
        } else {
            throw new Error(data.error || 'Upload failed');
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload sound location. Please try again.');
    }
}

function clearUploadForm() {
    document.getElementById('sound-title').value = '';
    document.getElementById('sound-description').value = '';
    document.getElementById('sound-category').value = 'ambient';
    document.getElementById('sound-quality').value = 'good';
    document.getElementById('audio-file').value = '';
    document.getElementById('drive-link').value = '';
    document.getElementById('selected-location').textContent = 'Click on the map to select location';
    selectedLocation = null;
}

function togglePanel(panelId) {
    const panels = document.querySelectorAll('.filter-panel, .time-filter, .comparison-panel, .upload-panel');
    panels.forEach(panel => {
        if (panel.id === panelId) {
            panel.classList.toggle('hide');
        } else {
            panel.classList.add('hide');
        }
    });
}
};
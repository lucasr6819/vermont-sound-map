// Preserve all original Vermont sound data and functionality while fixing map display
var map;
var markers = new Map();
var activeFilters = new Set();
var connectionLines = [];
var connectionsVisible = false;
var connectionFilters = {
    categories: [],
    minSharedTags: 1
};

// Keep original color mappings
const tagColorMap = {
    'protest': '#FF4136',
    'political': '#FF4136',
    'activism': '#FF4136',
    'historical': '#FFDC00',
    'cultural': '#39CCCC',
    'community': '#01FF70',
    'broadcast': '#7FDBFF',
    'environmental': '#2ECC40',
    'indigenous': '#B10DC9',
    'social-justice': '#FF851B'
};

const connectionColors = {
    'historical': '#FFD700',  // Gold
    'cultural': '#9370DB',    // Purple
    'environmental': '#32CD32', // Green
    'community': '#4169E1',   // Blue
    'political': '#DC143C'    // Red
};

// --- New sources loader and display function ---
let vermontSources = {};

function loadSources(json) {
    vermontSources = json;
}

function getSourcesHtml(sound) {
    if (!sound.sourceKeys || sound.sourceKeys.length === 0) return '<div class="popup-info">No sources available</div>';
    return `<div class="popup-info"><span class="popup-label">Sources:</span><ul style='margin: 6px 0 0 0; padding-left: 18px;'>` +
        sound.sourceKeys.map(key => {
            const src = vermontSources[key];
            if (!src) return '';
            return `<li><a href='${src.url}' target='_blank' style='color:#0074D9;'>${src.location}</a>: ${src.description}</li>`;
        }).join('') + '</ul></div>';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create the map centered on Vermont
    map = L.map('map').setView([43.8981, -72.5795], 8);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Load sources from JSON file on page load
    fetch('vermont-sources.json')
        .then(response => response.json())
        .then(data => loadSources(data))
        .catch(err => console.error('Failed to load sources JSON:', err));

    // Initialize markers for each sound and preserve original functionality
    vermontSounds.forEach(sound => {
        const marker = L.marker([sound.location.lat, sound.location.lng], {
            title: sound.title,
            riseOnHover: true
        }).addTo(map);

        // Create popup content
        const popupContent = `
            <div class="sound-popup">
                <h3>${sound.title}</h3>
                <p>${sound.description}</p>
                <div class="popup-info">
                    <span class="popup-label">Category:</span> ${sound.category} - ${sound.subcategory}
                </div>
                <div class="popup-info">
                    <span class="popup-label">Date:</span> ${sound.date}
                </div>
                <div class="tags">
                    ${sound.tags.map(tag => `
                        <span class="tag" style="
                            background: #000080;
                            color: #FFFFFF;
                            border: outset 1px #FFFFFF;
                            font-family: 'Courier New', monospace;
                            font-size: 11px;
                            padding: 2px 6px;
                            margin: 2px;
                            display: inline-block;
                        ">${tag}</span>
                    `).join('')}
                </div>
                ${getSourcesHtml(sound)}
                <div class="audio-container">
                    ${createAudioPlayer(sound)}
                </div>
            </div>
        `;
        
        // Bind popup to marker
        marker.bindPopup(popupContent, {
            maxWidth: 400,
            className: 'custom-popup'
        });
        
        // Store marker reference
        markers.set(sound.id, marker);
        
        // Add click event for connections
        marker.on('click', () => {
            if (window.soundConnections?.enabled) {
                window.soundConnections.showConnections(sound);
            }
        });
    });

    // Initialize search functionality
    setupSearch();
    
    // Initialize category filters
    initializeCategories();
    
    // Add connection control
    map.addControl(new ConnectionControl());
});

// Initialize categories from the data
function initializeCategories() {
    const categoryFilters = document.getElementById('category-filters');
    const categories = new Set();
    
    vermontSounds.forEach(sound => {
        categories.add(sound.category);
    });

    if (categoryFilters) {
        categoryFilters.innerHTML = `
            <div style="background: #FFFFFF; padding: 10px; border: inset 2px #808080;">
                ${Array.from(categories).map(category => `
                    <div class="filter-item">
                        <label style="display: flex; align-items: center; gap: 8px; margin: 8px 0; cursor: pointer;">
                            <input type="checkbox" 
                                   value="${category}" 
                                   checked 
                                   style="width: 16px; height: 16px; accent-color: #000080;">
                            <span style="color: #000080; font-weight: bold;">${category}</span>
                        </label>
                    </div>
                `).join('')}
            </div>
        `;

        categoryFilters.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    activeFilters.add(e.target.value);
                } else {
                    activeFilters.delete(e.target.value);
                }
                applyFilters();
            });
        });
    }
}

// Connection control
const ConnectionControl = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function(map) {
        const container = L.DomUtil.create('div');
        
        const control = L.DomUtil.create('div', 'connection-control leaflet-bar', container);
        control.innerHTML = `
            <a href="#" title="Toggle Connections">
                <i class="fas fa-project-diagram"></i>
            </a>
        `;
        
        const panel = L.DomUtil.create('div', 'connection-panel', container);
        panel.innerHTML = `
            <h3>Sound Connections</h3>
            <div class="connection-filters">
                <div class="connection-filter-item">
                    <input type="checkbox" id="historical" value="historical" checked>
                    <label for="historical">Historical</label>
                </div>
                <div class="connection-filter-item">
                    <input type="checkbox" id="cultural" value="cultural" checked>
                    <label for="cultural">Cultural</label>
                </div>
                <div class="connection-filter-item">
                    <input type="checkbox" id="environmental" value="environmental" checked>
                    <label for="environmental">Environmental</label>
                </div>
            </div>
        `;
        
        control.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            connectionsVisible = !connectionsVisible;
            control.classList.toggle('active');
            panel.classList.toggle('visible');
            drawTagConnections();
        };
        
        L.DomEvent.disableScrollPropagation(panel);
        L.DomEvent.disableClickPropagation(panel);
        
        return container;
    }
});

// Helper function to create audio player
function createAudioPlayer(sound) {
    const fileId = sound.audioUrl.match(/\/d\/(.*?)\/view/)?.[1];
    if (!fileId) {
        console.error('Invalid Google Drive URL:', sound.audioUrl);
        return '';
    }

    return `
        <div class="audio-container">
            <iframe 
                src="https://drive.google.com/file/d/${fileId}/preview" 
                class="audio-frame"
                allow="autoplay"
                frameborder="0"
                style="width: 100%; height: 60px;">
            </iframe>
        </div>
    `;
}

// Add search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = searchSounds(query);
        displaySearchResults(results);
    }, 300));
}

// Search through Vermont sounds
function searchSounds(query) {
    return vermontSounds.filter(sound => {
        const searchableFields = [
            sound.title,
            sound.description,
            sound.category,
            sound.subcategory,
            ...(sound.tags || []),
            ...Object.values(sound.metadata || {}).filter(v => typeof v === 'string')
        ].map(field => (field || '').toLowerCase());
        
        const queryWords = query.split(/\s+/);
        return queryWords.every(word => 
            searchableFields.some(field => field.includes(word))
        );
    });
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No sounds found</p>';
        return;
    }
    
    const resultsList = results.map(sound => `
        <div class="search-result" data-sound-id="${sound.id}">
            <h4>${sound.title}</h4>
            <p class="category">${sound.category} - ${sound.subcategory}</p>
            <p class="description">${truncateText(sound.description, 100)}</p>
            <div class="tags">
                ${sound.tags.slice(0, 5).map(tag => 
                    `<span class="tag">${tag}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsList;
    
    // Add click handlers
    searchResults.querySelectorAll('.search-result').forEach(result => {
        result.addEventListener('click', () => {
            const soundId = result.dataset.soundId;
            const sound = vermontSounds.find(s => s.id === soundId);
            if (sound) {
                map.setView([sound.location.lat, sound.location.lng], 12);
                const marker = markers.get(soundId);
                if (marker) {
                    marker.openPopup();
                }
            }
        });
    });
}

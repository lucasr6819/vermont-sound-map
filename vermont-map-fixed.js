// Preserve all original Vermont sound data and functionality
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Create the map centered on Vermont
    map = L.map('map', {
        center: [43.8981, -72.5795],
        zoom: 8,
        minZoom: 6,
        maxZoom: 18
    });

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Add all sound markers
    vermontSounds.forEach(sound => {
        const marker = L.marker([sound.location.lat, sound.location.lng], {
            title: sound.title,
            riseOnHover: true
        }).addTo(map);

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
                <div class="audio-container">
                    ${createAudioPlayer(sound)}
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 400,
            className: 'custom-popup'
        });
        
        markers.set(sound.id, marker);
    });

    // Initialize functionality
    setupSearch();
    initializeCategories();
    setupConnections();
});

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

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = vermontSounds.filter(sound => {
            const searchableFields = [
                sound.title,
                sound.description,
                sound.category,
                sound.subcategory,
                ...(sound.tags || [])
            ].map(field => (field || '').toLowerCase());
            
            return searchableFields.some(field => field.includes(query));
        });
        
        displaySearchResults(results);
    }, 300));
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No sounds found</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(sound => `
        <div class="search-result" data-sound-id="${sound.id}">
            <h4>${sound.title}</h4>
            <p class="category">${sound.category} - ${sound.subcategory}</p>
            <p class="description">${sound.description.substring(0, 100)}...</p>
            <div class="tags">
                ${sound.tags.slice(0, 5).map(tag => 
                    `<span class="tag">${tag}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');
    
    searchResults.querySelectorAll('.search-result').forEach(result => {
        result.addEventListener('click', () => {
            const soundId = result.dataset.soundId;
            const sound = vermontSounds.find(s => s.id === soundId);
            if (sound) {
                map.setView([sound.location.lat, sound.location.lng], 12);
                markers.get(soundId)?.openPopup();
            }
        });
    });
}

function initializeCategories() {
    const categoryFilters = document.getElementById('category-filters');
    if (!categoryFilters) return;
    
    const categories = new Set(vermontSounds.map(s => s.category));
    
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

    categories.forEach(category => activeFilters.add(category));
    
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

function setupConnections() {
    const toggleButton = document.getElementById('toggle-connections');
    if (!toggleButton) return;
    
    toggleButton.addEventListener('click', () => {
        connectionsVisible = !connectionsVisible;
        toggleButton.classList.toggle('active');
        if (connectionsVisible) {
            drawConnections();
        } else {
            clearConnections();
        }
    });
}

function drawConnections() {
    clearConnections();
    
    vermontSounds.forEach((sound1, i) => {
        vermontSounds.slice(i + 1).forEach(sound2 => {
            const sharedTags = sound1.tags.filter(tag => 
                sound2.tags.includes(tag)
            );
            
            if (sharedTags.length >= connectionFilters.minSharedTags) {
                const color = tagColorMap[sharedTags[0].toLowerCase()] || '#666666';
                
                const line = L.polyline(
                    [
                        [sound1.location.lat, sound1.location.lng],
                        [sound2.location.lat, sound2.location.lng]
                    ],
                    {
                        color: color,
                        weight: Math.min(sharedTags.length * 2, 6),
                        opacity: 0.6
                    }
                ).addTo(map);
                
                connectionLines.push(line);
            }
        });
    });
}

function clearConnections() {
    connectionLines.forEach(line => map.removeLayer(line));
    connectionLines = [];
}

function applyFilters() {
    markers.forEach((marker, id) => {
        const sound = vermontSounds.find(s => s.id === id);
        if (sound && activeFilters.has(sound.category)) {
            marker.addTo(map);
        } else {
            marker.remove();
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

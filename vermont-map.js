// Vermont Sound Map JavaScript

// Global variables
var map;
var markers = new Map();
var activeFilters = new Set();
var connectionLines = [];
var connectionsVisible = false;
var connectionFilters = {
    categories: [],
    minSharedTags: 1
};
var heatLayer;
var heatmapVisible = true;
var audioPointsVisible = false;

// Color mappings for tags and connections
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
    'historical': '#FFD700',
    'cultural': '#9370DB',
    'environmental': '#32CD32',
    'community': '#4169E1',
    'political': '#DC143C'
};

// Initialize the map and functionality when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Ensure vermontSounds is loaded
    if (typeof vermontSounds === 'undefined' || !Array.isArray(vermontSounds)) {
        console.error('vermontSounds data is not loaded or is not an array.');
        return;
    }

    // Create the map centered on Vermont
    map = L.map('map', {
        center: [43.8981, -72.5795],
        zoom: 8,
        minZoom: 6,
        maxZoom: 18
    });

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Force map to update its size
    setTimeout(function() {
        map.invalidateSize();
    }, 100);

    // Add sound markers to the map
    vermontSounds.forEach(sound => {
        const marker = L.marker([sound.location.lat, sound.location.lng], {
            title: sound.title,
            riseOnHover: true
        });

        // Create popup content for each marker
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

    // Initialize UI functionality
    setupSearch();
    populateSearchSuggestions();
    initializeCategories();
    setupConnections();
    setupHeatmap();
    setupModal();
    setupAudioPoints();

    // Show heatmap by default
    if (heatmapVisible) {
        const toggleButton = document.getElementById('toggle-heatmap');
        if (toggleButton) {
            toggleButton.textContent = 'Hide Heatmap';
        }
        createHeatmap();
        if (heatLayer) {
            heatLayer.addTo(map);
        }
    }
});

// Function to create an audio player, handling Google Drive links
function createAudioPlayer(sound) {
    if (sound.audioUrl && sound.audioUrl.includes('drive.google.com')) {
        const match = sound.audioUrl.match(/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            const fileId = match[1];
            return `
                <iframe src="https://drive.google.com/file/d/${fileId}/preview" width="300" height="50" frameborder="0" allow="autoplay"></iframe>
            `;
        }
    }
    return `
        <audio controls src="${sound.audioUrl}" class="audio-player">
            Your browser does not support the audio element.
        </audio>
    `;
}

// Function to populate search suggestions
function populateSearchSuggestions() {
    const suggestions = new Set();
    vermontSounds.forEach(sound => {
        suggestions.add(sound.title);
        sound.tags.forEach(tag => suggestions.add(tag));
    });
    verified_vermont_sound_pollution.verified_locations.forEach(item => {
        suggestions.add(item.name);
        item.sources.forEach(source => suggestions.add(source));
    });

    const datalist = document.getElementById('search-suggestions');
    if (datalist) {
        datalist.innerHTML = '';
        suggestions.forEach(suggestion => {
            const option = document.createElement('option');
            option.value = suggestion;
            datalist.appendChild(option);
        });
    }
}

// Function to set up search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            filterData(query);
        });
    }
}

// Function to initialize category filters
function initializeCategories() {
    const categories = [...new Set(vermontSounds.map(s => s.category))];
    const container = document.getElementById('category-filters');
    if (container) {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.dataset.category = category;
            button.onclick = () => toggleFilter(category);
            container.appendChild(button);
        });
    }
}

// Function to toggle a category filter
function toggleFilter(category) {
    const button = document.querySelector(`[data-category="${category}"]`);
    if (button) {
        if (activeFilters.has(category)) {
            activeFilters.delete(category);
            button.classList.remove('active');
        } else {
            activeFilters.add(category);
            button.classList.add('active');
        }
    }
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    filterData(query);
}

// Function to filter markers based on search query and active category filters
function filterData(query = '') {
    // Filter original audio points
    if (audioPointsVisible) {
        const lowerCaseQuery = query.toLowerCase();
        vermontSounds.forEach(sound => {
            const marker = markers.get(sound.id);
            if (marker) {
                const matchesCategory = activeFilters.size === 0 || activeFilters.has(sound.category);
                const matchesSearch = sound.title.toLowerCase().includes(lowerCaseQuery) ||
                                      sound.description.toLowerCase().includes(lowerCaseQuery) ||
                                      sound.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
                
                if (matchesCategory && matchesSearch) {
                    if (!map.hasLayer(marker)) {
                        marker.addTo(map);
                    }
                } else {
                    if (map.hasLayer(marker)) {
                        map.removeLayer(marker);
                    }
                }
            }
        });
    }

    // Filter heatmap points
    if (heatmapVisible) {
        createHeatmap(query);
        if (heatLayer) {
            heatLayer.addTo(map);
        }
    }
}

// Function to set up the connections feature
function setupConnections() {
    const toggleButton = document.getElementById('toggle-connections');
    if (toggleButton) {
        toggleButton.onclick = toggleConnectionVisibility;
    }

    const categoryCheckboxes = document.querySelectorAll('#connection-filters input[type="checkbox"]');
    categoryCheckboxes.forEach(cb => {
        cb.onchange = () => {
            connectionFilters.categories = [...document.querySelectorAll('#connection-filters input:checked')].map(c => c.value);
            updateConnections();
        };
    });

    const minTagsSlider = document.getElementById('min-shared-tags');
    if (minTagsSlider) {
        minTagsSlider.oninput = () => {
            const minTagsValue = document.getElementById('min-tags-value');
            if (minTagsValue) {
                minTagsValue.textContent = minTagsSlider.value;
            }
            connectionFilters.minSharedTags = parseInt(minTagsSlider.value, 10);
            updateConnections();
        };
    }
}

// Function to toggle the visibility of connection lines
function toggleConnectionVisibility() {
    connectionsVisible = !connectionsVisible;
    const toggleButton = document.getElementById('toggle-connections');
    const filters = document.getElementById('connection-filters');
    
    if (toggleButton) {
        toggleButton.textContent = connectionsVisible ? 'Hide Connections' : 'Show Connections';
    }
    
    if (filters) {
        filters.style.display = connectionsVisible ? 'block' : 'none';
    }

    if (connectionsVisible) {
        updateConnections();
    } else {
        clearConnections();
    }
}

// Function to update the connection lines based on current filters
function updateConnections() {
    clearConnections();
    if (!connectionsVisible) return;

    const filteredSounds = vermontSounds.filter(sound => 
        connectionFilters.categories.length === 0 || connectionFilters.categories.includes(sound.category)
    );

    for (let i = 0; i < filteredSounds.length; i++) {
        for (let j = i + 1; j < filteredSounds.length; j++) {
            const soundA = filteredSounds[i];
            const soundB = filteredSounds[j];
            const sharedTags = soundA.tags.filter(tag => new Set(soundB.tags).has(tag));

            if (sharedTags.length >= connectionFilters.minSharedTags) {
                const color = getConnectionColor(sharedTags);
                const line = L.polyline([
                    [soundA.location.lat, soundA.location.lng],
                    [soundB.location.lat, soundB.location.lng]
                ], { color: color, weight: 2, opacity: 0.7 }).addTo(map);
                
                line.bindPopup(`Connection: ${soundA.title} - ${soundB.title}<br>Shared Tags: ${sharedTags.join(', ')}`);
                connectionLines.push(line);
            }
        }
    }
}

// Function to determine the color of a connection line
function getConnectionColor(sharedTags) {
    for (const tag in connectionColors) {
        if (sharedTags.includes(tag)) {
            return connectionColors[tag];
        }
    }
    return '#888888'; // Default color if no matching tag is found
}

// Function to clear all connection lines from the map
function clearConnections() {
    connectionLines.forEach(line => map.removeLayer(line));
    connectionLines = [];
}

// Function to set up the heatmap feature
function setupHeatmap() {
    const toggleButton = document.getElementById('toggle-heatmap');
    if (toggleButton) {
        toggleButton.onclick = toggleHeatmapVisibility;
    }
}

// Function to toggle the visibility of the heatmap
function toggleHeatmapVisibility() {
    heatmapVisible = !heatmapVisible;
    const toggleButton = document.getElementById('toggle-heatmap');

    if (toggleButton) {
        toggleButton.textContent = heatmapVisible ? 'Hide Heatmap' : 'Show Heatmap';
    }

    if (heatmapVisible) {
        createHeatmap(); // Recreate the heatmap every time it's shown
        if (heatLayer) {
            heatLayer.addTo(map);
        }
    } else {
        if (heatLayer) {
            map.removeLayer(heatLayer);
            heatLayer = null; // Clear the layer
        }
    }
}

// Function to get color based on noise level
function getHeatmapColor(db) {
    if (db > 110) return 'red';
    if (db > 90) return 'orange';
    if (db > 70) return 'yellow';
    return 'green';
}

// Function to create the heatmap layer
function createHeatmap(query = '') {
    if (heatLayer) {
        map.removeLayer(heatLayer);
    }

    const lowerCaseQuery = query.toLowerCase();

    const heatPoints = verified_vermont_sound_pollution.verified_locations
        .filter(item => {
            if (!query) return true;
            return item.name.toLowerCase().includes(lowerCaseQuery) ||
                   item.description.toLowerCase().includes(lowerCaseQuery) ||
                   (Array.isArray(item.sources) && item.sources.some(source => {
                        if (typeof source === 'string') {
                            return source.toLowerCase().includes(lowerCaseQuery);
                        } else if (typeof source === 'object' && source.text) {
                            return source.text.toLowerCase().includes(lowerCaseQuery);
                        }
                        return false;
                   }));
        })
        .map(item => {
            const marker = L.circleMarker([item.lat, item.lng], {
                radius: 20,
                fillColor: getHeatmapColor(item.noise_level_db),
                color: 'black',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.5
            });

            marker.bindTooltip(item.name);

            // Fix: Render sources correctly for both string and object formats
            let sourcesHtml = '';
            // Special case: If the item matches one of the known keys, use the provided links
            const specialSources = {
                "f35_fighter_jets_burlington_airport": [
                    "https://www.communitynews.net/home/on-the-f-35s-noise-pollution-as-an-environmental-injustice",
                    "https://vtdigger.org/2018/02/27/already-battered-thunderous-noise-community-braces-arrival-f-35/",
                    "https://www.sevendaysvt.com/OffMessage/archives/2019/05/28/many-more-homes-are-inside-high-decibel-areas-on-new-f-35-sound-maps",
                    "https://www.btvsound.com/public-portal/",
                    "https://www.vtcng.com/otherpapersbvt/news/around_town/updated-noise-exposure-map-for-f-35s-released-fewer-south-burlington-homes-in-65-decibel/article_7a70c07d-daf0-5cd1-825b-dfac71ef266d.html",
                    "https://www.nature.com/articles/s41370-024-00725-3",
                    "https://vtdigger.org/2024/10/13/south-burlington-city-council-passes-f-35-resolution/",
                    "https://www.vtcng.com/otherpapersbvt/news/municipal_matters/south-burlington-city-council-passes-f-35-resolution/article_2cf79ea6-871e-11ef-90c1-8f9ee29a4c5a.html",
                    "https://saveourskiesvt.org/evidence-of-corruption-of-the-f-35-burlington-basing-process/",
                    "https://www.vermontpublic.org/vpr-news/2013-04-15/leahy-responds-to-f-35-preliminary-approval",
                    "https://vtdigger.org/2018/03/05/leahy-staff-central-role-f-35-basing-decision/",
                    "https://www.vermontpublic.org/podcast/brave-little-state/2021-07-22/why-is-the-f-35-based-in-vermont",
                    "https://www.airforcetimes.com/news/your-air-force/2019/10/01/air-force-rejects-request-for-further-f-35-noise-study/"
                ],
                "rock_of_ages_granite_quarry": [
                    "https://vtdigger.org/2018/06/22/barre-rock-crusher-granted-permit-despite-neighbor-opposition/",
                    "https://law.justia.com/cases/vermont/supreme-court/2019/2018-249.html",
                    "https://protectgranitevillevt.wordpress.com/2017/07/06/neighbors-fault-state-for-lax-quarry-regulation/",
                    "https://protectgranitevillevt.wordpress.com/current-news/",
                    "https://vtdigger.org/2019/07/16/after-a-decade-of-gripes-in-graniteville-neighbors-question-state-response/",
                    "https://vtdigger.org/2019/08/26/supreme-court-sides-with-owners-of-graniteville-rock-crushing-operation/",
                    "https://www.vermontlaw.edu/academics/clinics-and-externships/ENRLC/cases/opposing-an-asphalt-plant-in-local-residential-community",
                    "https://www.enoisecontrol.com/summary-msha-noise-guidelines-safety-regulations/",
                    "https://dec.vermont.gov/air-quality/permits/source-categories/quarries-and-rock-crushing"
                ],
                "sheffield_wind_farm": [
                    "https://www.vermontpublic.org/vpr-news/2015-04-01/fish-and-wildlife-studies-impact-of-searsburg-wind-development-on-black-bears",
                    "http://vtfishandwildlife.com/conserve/deerfield-wind-bear-study"
                ],
                "searsburg_wind_farm": [
                    "https://www.vermontpublic.org/vpr-news/2015-04-01/fish-and-wildlife-studies-impact-of-searsburg-wind-development-on-black-bears",
                    "http://vtfishandwildlife.com/conserve/deerfield-wind-bear-study"
                ],
                "kingdom_community_wind_farm": [
                    "https://www.vermontpublic.org/vpr-news/2015-04-01/fish-and-wildlife-studies-impact-of-searsburg-wind-development-on-black-bears",
                    "http://vtfishandwildlife.com/conserve/deerfield-wind-bear-study"
                ],
                "interstate_89_corridor": [
                    "https://www.uvm.edu/cems/trc/current-projects",
                    "https://vtrans.vermont.gov/",
                    "https://vtrans.vermont.gov/projects/colchester-exit17/project-updates",
                    "https://vtrans.vermont.gov/road-construction"
                ],
                "amtrak_vermonter_service": [
                    "https://www.uvm.edu/cems/trc/current-projects",
                    "https://vtrans.vermont.gov/"
                ],
                "vermont_route_100": [
                    "https://www.uvm.edu/cems/trc/current-projects",
                    "https://vtrans.vermont.gov/"
                ],
                "ben_jerrys_factory": [],
                "uvm_medical_center": [
                    "https://www.weho.org/city-government/city-departments/community-safety/public-safety/helicopter-noise"
                ],
                "globalfoundries_essex": [
                    "https://vtdigger.org/2021/04/28/globalfoundries-wants-its-essex-junction-plant-to-produce-its-own-energy/"
                ],
                "mcneil_generating_station": [
                    "https://www.stopbtvbiomass.org/mcneil",
                    "https://www.burlingtonvt.gov/539/Noise-Pollution"
                ],
                "killington_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming",
                    "https://www.glassdoor.com/Reviews/Employee-Review-Killington-Ski-Resort-RVW14734107.htm"
                ],
                "stowe_mountain_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "jay_peak_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "vermont_rail_system": [
                    "https://www.uvm.edu/cems/trc/current-projects",
                    "https://vtrans.vermont.gov/"
                ],
                "cabot_creamery": [],
                "lake_champlain_ferries": [
                    "https://www.uvm.edu/cems/trc/current-projects",
                    "https://vtrans.vermont.gov/"
                ],
                "patrick_leahy_airport_general": [
                    "https://www.communitynews.net/home/on-the-f-35s-noise-pollution-as-an-environmental-injustice",
                    "https://www.btvsound.com/public-portal/",
                    "https://www.sevendaysvt.com/OffMessage/archives/2019/05/28/many-more-homes-are-inside-high-decibel-areas-on-new-f-35-sound-maps"
                ],
                "state_highway_construction": [
                    "https://vtrans.vermont.gov/road-construction",
                    "https://vtrans.vermont.gov/projects/colchester-exit17/project-updates",
                    "https://www.stateregstoday.com/living/environmental-protection/noise-pollution-control-in-vermont",
                    "https://environment.transportation.org/focus-areas/noise/noise-overview/"
                ],
                "velco_infrastructure": [
                    "https://www.velco.com/projects/highgate-substation",
                    "https://www.velco.com/what-we-do"
                ],
                "vermont_trucking_freight": [
                    "https://www.stateregstoday.com/living/environmental-protection/noise-pollution-control-in-vermont",
                    "https://environment.transportation.org/focus-areas/noise/noise-overview/"
                ],
                "vermont_quarrying_slate_valley": [
                    "https://vtdigger.org/2019/08/26/supreme-court-sides-with-owners-of-graniteville-rock-crushing-operation/",
                    "https://www.vermontlaw.edu/academics/clinics-and-externships/ENRLC/cases/opposing-an-asphalt-plant-in-local-residential-community",
                    "https://protectgranitevillevt.wordpress.com/current-news/",
                    "https://dec.vermont.gov/air-quality/permits/source-categories/quarries-and-rock-crushing"
                ],
                "vermont_emergency_medical_services": [
                    "https://www.weho.org/city-government/city-departments/community-safety/public-safety/helicopter-noise"
                ],
                "burlington_fire_department": [
                    "https://www.burlingtonvt.gov/539/Noise-Pollution"
                ],
                "montpelier_fire_ambulance": [
                    "https://www.burlingtonvt.gov/539/Noise-Pollution"
                ],
                "vermont_state_emergency_operations": [
                    "https://www.weho.org/city-government/city-departments/community-safety/public-safety/helicopter-noise"
                ],
                "bolton_valley_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "smugglers_notch_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "mad_river_glen": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "middlebury_college_snow_bowl": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "stratton_mountain_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "burke_mountain_ski_academy": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "ascutney_mountain_resort": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ],
                "cochrans_ski_area": [
                    "https://www.change.org/p/stowe-select-board-support-a-noise-ordinance-for-stowe",
                    "https://www.vermontpublic.org/local-news/2024-02-27/greener-snowmaking-is-helping-ski-resorts-weather-climate-change",
                    "https://skivermont.com/snowmaking-grooming"
                ]
            };
            let sourcesToRender = item.sources;
            // Normalize name to match specialSources keys
            function normalizeKey(name) {
                return name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
            }
            // Use id if present, otherwise normalized name
            const key = item.id ? item.id : normalizeKey(item.name);
            if (specialSources[key]) {
                sourcesToRender = specialSources[key];
            }
            // Only render valid links
            if (sourcesToRender && Array.isArray(sourcesToRender)) {
                const validSources = sourcesToRender.filter(source => typeof source === 'string' && source.trim() !== '' && source !== 'undefined' && source !== undefined && source !== null);
                if (validSources.length === 0) {
                    sourcesHtml = '<li>No sources available</li>';
                } else {
                    sourcesHtml = validSources.map(source => {
                        if (/^(https?:\/\/)/.test(source)) {
                            return `<li><a href="${source}" target="_blank">${source}</a></li>`;
                        } else {
                            return `<li>${source}</li>`;
                        }
                    }).join('');
                }
            } else {
                sourcesHtml = '<li>No sources available</li>';
            }

            const popupContent = `
                <div class="heatmap-popup">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <p><strong>Noise Level:</strong> ${item.noise_level_db} dB</p>
                    <div class="sources">
                        <strong>Sources:</strong>
                        <ul>${sourcesHtml}</ul>
                    </div>
                </div>
            `;

            marker.on('click', () => {
                showModal(popupContent);
            });
            return marker;
        });

    heatLayer = L.layerGroup(heatPoints);
}

// Function to set up the modal
function setupModal() {
    const modal = document.getElementById('heatmap-modal');
    const closeButton = document.querySelector('.modal-close-btn');

    if (closeButton) {
        closeButton.onclick = hideModal;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }
}

// Function to show the modal with content
function showModal(content) {
    const modal = document.getElementById('heatmap-modal');
    const modalBody = document.getElementById('modal-body');
    if (modal && modalBody) {
        modalBody.innerHTML = content;
        modal.classList.add('show');
    }
}

// Function to hide the modal
function hideModal() {
    const modal = document.getElementById('heatmap-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function setupAudioPoints() {
    const toggleButton = document.getElementById('toggle-audio-points');
    if (toggleButton) {
        toggleButton.onclick = toggleAudioPointsVisibility;
    }
    // Initially hide category filters
    const filtersContainer = document.getElementById('filters-container');
    if (filtersContainer) {
        filtersContainer.style.display = 'none';
    }
}

function toggleAudioPointsVisibility() {
    audioPointsVisible = !audioPointsVisible;
    const toggleButton = document.getElementById('toggle-audio-points');
    const filtersContainer = document.getElementById('filters-container');

    if (toggleButton) {
        toggleButton.textContent = audioPointsVisible ? 'Hide Audio Points' : 'Show Audio Points';
    }

    if (filtersContainer) {
        filtersContainer.style.display = audioPointsVisible ? 'block' : 'none';
    }

    if (audioPointsVisible) {
        showAllAudioPoints();
    } else {
        hideAllAudioPoints();
    }
}

function showAllAudioPoints() {
    markers.forEach(marker => {
        if (!map.hasLayer(marker)) {
            marker.addTo(map);
        }
    });
    filterData();
}

function hideAllAudioPoints() {
    markers.forEach(marker => {
        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        }
    });
}
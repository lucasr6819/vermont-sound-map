// Sound Connections System
class SoundConnections {
    constructor() {
        this.enabled = false;
        this.selectedSound = null;
        this.connections = new Map();
        this.lines = [];
        this.waitForInit();
    }

    waitForInit() {
        const checkInterval = setInterval(() => {
            if (window.map && window.vermontSounds && window.markers) {
                this.init();
                clearInterval(checkInterval);
            }
        }, 100);
    }

    init() {
        this.map = window.map;
        this.sounds = window.vermontSounds;
        this.markers = window.markers;

        // Add click handlers to markers
        this.setupMarkerListeners();

        // Initialize the info panel
        this.createInfoPanel();
    }

    createInfoPanel() {
        const panel = document.createElement('div');
        panel.id = 'connection-info';
        panel.className = 'connection-info-panel';
        panel.style.display = 'none';
        document.querySelector('.control-panel .compact-controls').appendChild(panel);
    }

    setupMarkerListeners() {
        this.sounds.forEach(sound => {
            const marker = this.markers.get(sound.id);
            if (marker) {
                marker.on('click', () => {
                    if (this.enabled) {
                        this.showConnections(sound);
                        marker._icon.classList.add('selected-marker');
                    }
                });
            }
        });
    }

    findRelatedSounds(sound) {
        return this.sounds.filter(other => {
            if (other.id === sound.id) return false;

            let score = 0;
            let relationships = [];

            // Check temporal proximity (same year or adjacent years)
            const year1 = new Date(sound.date).getFullYear();
            const year2 = new Date(other.date).getFullYear();
            const yearDiff = Math.abs(year1 - year2);
            if (yearDiff <= 1) {
                score += 2;
                relationships.push('Temporal Proximity');
            }

            // Check for shared tags
            const sharedTags = sound.tags.filter(tag => other.tags.includes(tag));
            score += sharedTags.length;
            if (sharedTags.length > 0) {
                relationships.push('Shared Tags: ' + sharedTags.join(', '));
            }

            // Check for same category
            if (sound.category === other.category) {
                score += 3;
                relationships.push('Same Category: ' + sound.category);
            }

            // Check for same subcategory
            if (sound.subcategory === other.subcategory) {
                score += 2;
                relationships.push('Same Subcategory: ' + sound.subcategory);
            }

            // Check geographic proximity (within 5km)
            const distance = this.getDistance(
                [sound.location.lat, sound.location.lng],
                [other.location.lat, other.location.lng]
            );
            if (distance < 5) {
                score += 2;
                relationships.push('Geographic Proximity: ' + distance.toFixed(1) + 'km');
            }

            return score >= 3 ? { score, relationships } : false;
        }).filter(Boolean);
    }

    getDistance(coord1, coord2) {
        const R = 6371; // Earth's radius in km
        const lat1 = this.toRad(coord1[0]);
        const lat2 = this.toRad(coord2[0]);
        const dLat = this.toRad(coord2[0] - coord1[0]);
        const dLon = this.toRad(coord2[1] - coord1[1]);

        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    toRad(degrees) {
        return degrees * Math.PI / 180;
    }

    showConnections(sound) {
        this.clearConnections();
        this.selectedSound = sound;

        // Find and sort related sounds
        const related = this.findRelatedSounds(sound)
            .sort((a, b) => b.score - a.score);

        // Draw connections
        related.forEach(({ score, relationships }, index) => {
            const relatedSound = this.sounds[index];
            const line = this.drawConnection(sound, relatedSound, score, relationships);
            this.lines.push(line);
        });

        // Update info panel
        this.updateConnectionInfo(sound, related);

        // Center map to show all connections
        this.fitMapToConnections(sound, related.map(r => r.sound));
    }

    drawConnection(sound1, sound2, score, relationships) {
        const latlngs = [
            [sound1.location.lat, sound1.location.lng],
            [sound2.location.lat, sound2.location.lng]
        ];

        // Calculate color based on connection strength
        const colorScale = score => {
            if (score >= 8) return '#2ecc71'; // Strong connection
            if (score >= 5) return '#3498db'; // Medium connection
            return '#95a5a6'; // Weak connection
        };

        const line = L.polyline(latlngs, {
            color: colorScale(score),
            weight: Math.min(Math.max(score, 2), 5), // Line thickness based on score (2-5px)
            opacity: 0.7,
            dashArray: '5, 10',
            className: 'animated-connection'
        }).addTo(this.map);

        // Add hover effect
        line.on('mouseover', (e) => {
            line.setStyle({ opacity: 1, weight: line.options.weight + 2 });
            this.showConnectionTooltip(e.latlng, sound1, sound2, relationships);
        }).on('mouseout', () => {
            line.setStyle({ opacity: 0.7, weight: line.options.weight - 2 });
        });

        return line;
    }

    showConnectionTooltip(latlng, sound1, sound2, relationships) {
        const content = `
            <div class="connection-tooltip">
                <h4>Sound Connection</h4>
                <p><strong>Between:</strong></p>
                <ul>
                    <li>${sound1.title}</li>
                    <li>${sound2.title}</li>
                </ul>
                <p><strong>Relationships:</strong></p>
                <ul>
                    ${relationships.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        `;

        L.popup()
            .setLatLng(latlng)
            .setContent(content)
            .openOn(this.map);
    }

    updateConnectionInfo(sound, related) {
        const infoPanel = document.getElementById('connection-info');
        if (!infoPanel) return;

        const content = `
            <div class="connection-summary">
                <h4>Connections for: ${sound.title}</h4>
                <p>Found ${related.length} related sounds</p>
                <div class="connection-list">
                    ${related.map(({ sound: rel, score, relationships }) => `
                        <div class="connection-item">
                            <strong>${rel.title}</strong>
                            <span class="connection-strength">
                                ${this.getStrengthIndicator(score)}
                            </span>
                            <small>${relationships.join(' • ')}</small>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        infoPanel.innerHTML = content;
        infoPanel.style.display = 'block';
    }

    getStrengthIndicator(score) {
        if (score >= 8) return '●●●'; // Strong
        if (score >= 5) return '●●○'; // Medium
        return '●○○'; // Weak
    }

    fitMapToConnections(mainSound, relatedSounds) {
        const bounds = L.latLngBounds([mainSound.location]);
        relatedSounds.forEach(sound => {
            bounds.extend([sound.location.lat, sound.location.lng]);
        });
        this.map.fitBounds(bounds, { padding: [50, 50] });
    }

    clearConnections() {
        this.lines.forEach(line => line.remove());
        this.lines = [];
        this.markers.forEach(marker => {
            marker._icon.classList.remove('selected-marker');
        });
        const infoPanel = document.getElementById('connection-info');
        if (infoPanel) infoPanel.style.display = 'none';
    }

    toggleConnections() {
        this.enabled = !this.enabled;
        this.clearConnections();
        
        if (this.enabled) {
            // Highlight clickable markers
            this.markers.forEach(marker => {
                marker._icon.style.transition = 'all 0.3s ease';
                marker._icon.style.filter = 'brightness(1.2)';
                marker._icon.style.cursor = 'pointer';
            });
        } else {
            // Reset marker styles
            this.markers.forEach(marker => {
                marker._icon.style.filter = '';
                marker._icon.style.cursor = '';
            });
        }
    }
}

// Initialize the system
document.addEventListener('DOMContentLoaded', () => {
    window.soundConnections = new SoundConnections();
});

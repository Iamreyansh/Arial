const panorama = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360_deg_image_R2.jpg",
    "autoLoad": true,
    "showControls": false,
    "autoRotate": -5,
    "hotSpots": [
        {
            "pitch": -2.1,
            "yaw": 132.9,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Hospital_Manipal.png'),
            "createTooltipArgs": "Hospital Manipal"
        },
        {
            "pitch": -14.915616362436632,
            "yaw": 25.756312492753022,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Mall_Nexus.png'),
            "createTooltipArgs": "Mall Nexus"
        },
        {
            "pitch": -10,
            "yaw": -100,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_DPS.png'),
            "createTooltipArgs": "School DPS"
        },
        {
            "pitch": 0,
            "yaw": 0,
            "type": "scene",
            "sceneId": "entrance",
            "createTooltipFunc": createHotSpot('hotspots/Tech_Hope.png'),
            "createTooltipArgs": "Tech Hope"
        },
        {
            "pitch": 10,
            "yaw": 50,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Travel_Kia.png'),
            "createTooltipArgs": "Travel KIA"
        }
    ]
});

function createHotSpot(imagePath) {
    return function hotspot(hotSpotDiv, args) {
        // Remove default Pannellum classes
        hotSpotDiv.classList.remove('pnlm-hotspot', 'pnlm-sprite', 'pnlm-scene', 'pnlm-info');

        // Add custom class
        hotSpotDiv.classList.add('custom-hotspot');


        const div = document.createElement('div');
        div.classList.add('hotspot-container');

        // Create image element
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = args;
        img.classList.add('hotspot-image');

        div.appendChild(img);
        hotSpotDiv.appendChild(div);

    }
}


document.getElementById('zoom-in').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setHfov(panorama.getHfov() - 30);
});

document.getElementById('zoom-out').addEventListener('click', () => {
    panorama.setHfov(panorama.getHfov() + 30);
});

document.getElementById('fullscreen').addEventListener('click', () => {
    startInactivityTimer();
    panorama.toggleFullscreen();
});

document.getElementById('nav-up').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setPitch(panorama.getPitch() + 20);
});

document.getElementById('nav-down').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setPitch(panorama.getPitch() - 20);
});

document.getElementById('nav-left').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setYaw(panorama.getYaw() - 20);
});

document.getElementById('nav-right').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setYaw(panorama.getYaw() + 10);
});

document.getElementById('reset').addEventListener('click', () => {
    startInactivityTimer();
    panorama.setYaw(0);
    panorama.setPitch(0);
    panorama.setHfov(100);
});


const sidetab = document.getElementById('sidetab');

panorama.on('mousedown', (event) => {
    // Pause auto-rotate for 5 seconds on any click
    startInactivityTimer();
    const coords = panorama.mouseEventToCoords(event);
    console.log('Pitch:', coords[0], 'Yaw:', coords[1]);
});

let inactivityTimer;
function startInactivityTimer() {
    clearTimeout(inactivityTimer);
    panorama.stopAutoRotate();
    inactivityTimer = setTimeout(() => {
        panorama.startAutoRotate();
    }, 5000); // 5 seconds of inactivity
}


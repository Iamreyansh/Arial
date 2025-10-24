const panorama = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360_deg_image_R2.jpg",
    "autoLoad": true,
    "autoRotate": -5,
    "hotSpots": [
        {
            "pitch": -2.1,
            "yaw": 132.9,
            "type": "info",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Living Room"
        },
        {
            "pitch": -0.9,
            "yaw": -171.2,
            "type": "info",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Dining Area"
        },
        {
            "pitch": -10,
            "yaw": -100,
            "type": "info",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Kitchen"
        },
        {
            "pitch": 0,
            "yaw": 0,
            "type": "scene",
            "sceneId": "entrance",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Entrance"
        },
        {
            "pitch": 10,
            "yaw": 50,
            "type": "info",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Stairs"
        }
    ]
});

function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    const span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

document.getElementById('zoom-in').addEventListener('click', () => {
    panorama.setHfov(panorama.getHfov() - 30);
});

document.getElementById('zoom-out').addEventListener('click', () => {
    panorama.setHfov(panorama.getHfov() + 30);
});

document.getElementById('fullscreen').addEventListener('click', () => {
    panorama.toggleFullscreen();
});

document.getElementById('nav-up').addEventListener('click', () => {
    panorama.setPitch(panorama.getPitch() + 20);
});

document.getElementById('nav-down').addEventListener('click', () => {
    panorama.setPitch(panorama.getPitch() - 20);
});

document.getElementById('nav-left').addEventListener('click', () => {
    panorama.setYaw(panorama.getYaw() - 20);
});

document.getElementById('nav-right').addEventListener('click', () => {
    panorama.setYaw(panorama.getYaw() + 10);
});

let inactivityTimer;

function startInactivityTimer() {
    clearTimeout(inactivityTimer);
    panorama.stopAutoRotate();
    inactivityTimer = setTimeout(() => {
        panorama.startAutoRotate();
    }, 5000); // 5 seconds of inactivity
}

panorama.on('mousedown', () => {
    startInactivityTimer();
});

const sidetab = document.getElementById('sidetab');
const closeBtn = document.querySelector('.close-btn');

panorama.on('mousedown', (event) => {
    const coords = panorama.mouseEventToCoords(event);
    const hotspot = panorama.getHotSpot(coords);
    if (hotspot && hotspot.sceneId) {
        sidetab.querySelector('h2').innerText = hotspot.text;
        sidetab.querySelector('p').innerText = "More information about the " + hotspot.text;
        sidetab.style.right = '0';
    }
});

closeBtn.addEventListener('click', () => {
    sidetab.style.right = '-400px';
});
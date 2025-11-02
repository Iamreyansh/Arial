const panorama = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "360_deg_image_R2.jpg",
    "autoLoad": true,
    "showControls": false,
    "autoRotate": -7.5,
    "hotSpots": [
        {
            "pitch": -0.017358559279128116,
            "yaw": -57.791839141652204,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Hospital_Manipal.png'),
            "createTooltipArgs": "Manipal Hospital"
        },
        {
            "pitch": -0.8001377704526828,
            "yaw": -92.68415489328802,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Hospital_MVJ.png'),
            "createTooltipArgs": "MVJ Hospital"
        },
        {
            "pitch":  -5.536639313152783,
            "yaw": -66.58279661908637,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Hospital_Ovum.png'),
            "createTooltipArgs": "Ovum Hospital"
        },
        {
            "pitch":  -5.536639313152783,
            "yaw": -47.86963756260919,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Hospital_Silicon.png'),
            "createTooltipArgs": "Silicon Hospital"
        },
        {
            "pitch":  1.1128977900061352,
            "yaw": -72.7576819700118,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Mall_Nexus.png'),
            "createTooltipArgs": "Nexus Mall"
        },
        {
            "pitch":  -0.6776009309268224,
            "yaw": -75.73120605448894,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Mall_Orion.png'),
            "createTooltipArgs": "Orion Mall"
        },
        {
            "pitch":  -0.38760612892043395,
            "yaw": -67.53046397745588,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Mall_Phoenix.png'),
            "createTooltipArgs": "Pheonix Mall"
        },
        {
            "pitch": -3.238918033853701,
            "yaw": -124.64236587613163,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_Capstone.png'),
            "createTooltipArgs": "Capstone School"
        },
        {
            "pitch":  -0.7311754819346123,
            "yaw":  -79.12612222046626,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_DPS.png'),
            "createTooltipArgs": "DPS School"
        },
        {
            "pitch":  -0.8295506339814473,
            "yaw":  -80.9904189236685,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_Jain.png'),
            "createTooltipArgs": "Jain School"
        },
        {
            "pitch":  -0.38760612892043395,
            "yaw": -67.53046397745588,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_National.png'),
            "createTooltipArgs": "National School"
        },
        {
            "pitch":  -1.3134476192943154,
            "yaw": -35.61429347710545,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_Shriram.png'),
            "createTooltipArgs": "Shriram School"
        },
        {
            "pitch":  -1.3885949444425125,
            "yaw": -68.20665327987766,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/School_Vibgyor.png'),
            "createTooltipArgs": "Vibgyor School"
        },
        {
            "pitch":  -1.6512559022614077,
            "yaw": -55.1083279122534,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_Aerospace.png'),
            "createTooltipArgs": "Tech Aerospace"
        },
        {
            "pitch":  -3.5719163289416653,
            "yaw": -48.28506130784157,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_Bearys.png'),
            "createTooltipArgs": "Tech Bearys"
        },
        {
            "pitch":   -1.0801418213042462,
            "yaw": -86.90108736590923,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_Hope.png'),
            "createTooltipArgs": "Tech Hope"
        },
        {
            "pitch": -0.358781959852146,
            "yaw": -89.33602137650887,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_ITPL.png'),
            "createTooltipArgs": "Tech ITPL"
        },
        {
            "pitch":  -3.2738931683467136,
            "yaw": -80.69986860694317,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_Siemens.png'),
            "createTooltipArgs": "Tech Siemens"
        },
        {
            "pitch":   0.8998324093913027,
            "yaw": -68.89781968602327,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Tech_TCS.png'),
            "createTooltipArgs": "Tech TCS"
        },
        {
            "pitch":   -5.70181547080549,
            "yaw": -50.51892576992411,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Travel_Hoskote.png'),
            "createTooltipArgs": "Travel Hoskote"
        },
        {
            "pitch":  -0.49880225016122637,
            "yaw": 21.215992650283642,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Travel_KIA.png'),
            "createTooltipArgs": "Travel KIA"
        },
        {
            "pitch":   -2.6164214356919144,
            "yaw": -85.90860744988744,
            "type": "info",
            "createTooltipFunc": createHotSpot('hotspots/Travel_Whitefield.png'),
            "createTooltipArgs": "Travel Whitefield"
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
    panorama.setHfov(panorama.getHfov() - 30);
    startInactivityTimer();
});

document.getElementById('zoom-out').addEventListener('click', () => {
    panorama.setHfov(panorama.getHfov() + 30);
});

document.getElementById('fullscreen').addEventListener('click', () => {
    panorama.toggleFullscreen();
    startInactivityTimer();
});

document.getElementById('nav-up').addEventListener('click', () => {
    panorama.setPitch(panorama.getPitch() + 25);
    startInactivityTimer();
});

document.getElementById('nav-down').addEventListener('click', () => {
    panorama.setPitch(panorama.getPitch() - 25);
    startInactivityTimer();
});

document.getElementById('nav-left').addEventListener('click', () => {
    panorama.setYaw(panorama.getYaw() - 25);
    startInactivityTimer();
});

document.getElementById('nav-right').addEventListener('click', () => {
    panorama.setYaw(panorama.getYaw() + 25);
    startInactivityTimer();
});

document.getElementById('reset').addEventListener('click', () => {
    panorama.setYaw(0);
    panorama.setPitch(0);
    panorama.setHfov(100);
    startInactivityTimer();
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


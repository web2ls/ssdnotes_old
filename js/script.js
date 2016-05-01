"use strict"
var menuStatus = false;

function getMenu() {
	var a = document.getElementById("menuSwitcher");
	var b = document.getElementById("movingMenu");
	a.classList.remove("openMenu");
	a.classList.remove("closeMenu");
	b.classList.remove("showMenu");
	b.classList.remove("hideMenu")
	if (menuStatus == false) {
		a.classList.add("openMenu");
		menuStatus = true;
		b.classList.add("showMenu");
	} else {
		a.classList.add("closeMenu");
		b.classList.add("hideMenu");
		menuStatus = false;
	}
};

/*var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'autohide': 0,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 1
        },
        videoId: 'gPXd7qCfXYg',
        events: {
            'onReady': onPlayerReady
        }
    });

};


function onPlayerReady(event) {
    event.target.mute();
}*/
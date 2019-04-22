'use strict'


// 2d Vid Play handler
AFRAME.registerComponent("play-2d", {
    init: function () {
        const video = document.querySelector("#video-2d");
        const controls = document.querySelector("#controls-2d");

        this.el.addEventListener("click", () => {
            video.play();
            controls.setAttribute("src", "#pause");
        });
    }
});

// 360 Vid Play handler
AFRAME.registerComponent("play-360", {
    init: function () {
        const video = document.querySelector("#video-360");
        const controls = document.querySelector("#controls-360");
        const plane = document.querySelector("#plane-1");
        const sky = document.querySelector("a-sky");
        const sphere = document.querySelector("#videosphere");

        this.el.addEventListener("click", () => {
            video.play();
            sphere.setAttribute("visible", true);
            plane.setAttribute("visible", false);
            sky.setAttribute("visible", false);
            controls.setAttribute("src", "#pause");
        });
    }
});

// Play / Pause handler
AFRAME.registerComponent("play-pause-2d", {
    init: function () {
        const video = document.querySelector("#video-2d");
        const controls = document.querySelector("#controls-2d");

        this.el.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                controls.setAttribute("src", "#pause");
            } else {
                video.pause();
                controls.setAttribute("src", "#play")
            }
        });
    }
});

// Play / Pause handler (360)
AFRAME.registerComponent("play-pause-360", {
    init: function () {
        const video = document.querySelector("#video-360");
        const controls = document.querySelector("#controls-360");
        const plane = document.querySelector("#plane-1");
        const sky = document.querySelector("a-sky");
        const sphere = document.querySelector("#videosphere");

        this.el.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                sphere.setAttribute("visible", true);
                plane.setAttribute("visible", false);
                sky.setAttribute("visible", false);
                controls.setAttribute("src", "#pause");
            } else {
                video.pause();
                controls.setAttribute("src", "#play");
            }
        });
    }
});

// Show image 360 and hide 360-video
AFRAME.registerComponent("show-image-360", {

    init: function () {
        const video = document.querySelector("#video-360");
        const sky = document.querySelector("a-sky");
        const plane = document.querySelector("#plane-1");
        const sphere = document.querySelector("#videosphere");
        const controls = document.querySelector("#controls-360");

        this.el.addEventListener("click", () => {
            sky.setAttribute("color", "white");
            sky.setAttribute("visible", true);
            sphere.setAttribute("visible", false);
            plane.setAttribute("visible", false);
            if (!video.paused) {
                video.pause();
                controls.setAttribute("src", "#play");
            }
        });

        // This component replace following events in each Background Links entities:
        // event-set__click-sky-color="_event: click; _target: #sky; color: white;"
        // event-set__click-plane="_event: click; _target: #plane; visible: false;"
        // event-set__click-sphere="_event: click; _target: #videosphere; visible: false;"
        // event-set__click-sky="_event: click; _target: #sky; visible: true;">
    }

});
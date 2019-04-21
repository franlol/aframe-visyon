// Play / Pause handler
AFRAME.registerComponent("play-pause-2d", {
    init: function () {
        const video = document.querySelector("#video-2d");
        const controls = document.querySelector("#controls-2d");

        this.el.addEventListener("click", function () {
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
        const plane = document.querySelector("a-plane");
        const sky = document.querySelector("a-sky");
        
        this.el.addEventListener("click", function () {
            console.log(plane, sky)
            if (video.paused) {
                video.play();
                plane.setAttribute("visible", false);
                sky.setAttribute("visible", false);
                controls.setAttribute("src", "#pause");
            } else {
                video.pause();
                plane.setAttribute("visible", true);
                sky.setAttribute("visible", true);
                controls.setAttribute("src", "#play")
            }
        });
    }
});
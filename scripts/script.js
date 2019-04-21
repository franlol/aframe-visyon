// Play / Pause handler
AFRAME.registerComponent("play-pause", {
    init: function () {
        let video = document.querySelector("#video-2d");
        let controls = document.querySelector("#controls");

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

# VR - A-Frame TEST

360 VR technical test with [a-frame](https://aframe.io/) library.

Installation steps:

```
git clone 

Open index.html using a local server
```

### Features

- When you open index.html with your local server, you will see the sea, 2 little islands with banners (option menus) and a sky.

- There will be 3 banners like this one:

![Banner](https://raw.githubusercontent.com/franlol/aframe-visyon/master/banner.png)

- You can interact with the banners clicking on the options.

  - **Backgrounds banner** will update your scenario Background.

  - **Videos banner** will update your 2D screen with a 2d video, or your scenario with 360 video.

  - **Images banner** will update the poster with some cool image.

### Info:

This proyect has been developed under Arch Linux and tested in Google Chrome with VisualCode live server.

### Demo:

![demo](https://github.com/franlol/aframe-visyon/blob/master/demo.gif)

#### More info:

For the banner 'hovers' I have used [aframe-event-set-component](https://github.com/supermedium/superframe/tree/master/components/event-set) to handle some events, but for videos logic I have used registered components (in js file).

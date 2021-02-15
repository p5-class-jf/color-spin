var gui = new dat.GUI();
var params = {
    R_Speed: 0.0385,
    G_Speed: 0.0314,
    B_Speed: 0.0071,
    Spin_Speed: 0.05,
    Download_Image: function () { return save(); },
};
gui.add(params, "R_Speed", 0, 0.05, 0.0001);
gui.add(params, "G_Speed", 0, 0.05, 0.0001);
gui.add(params, "B_Speed", 0, 0.05, 0.0001);
gui.add(params, "Spin_Speed", 0, 0.20, 0.0001);
gui.add(params, "Download_Image");
function draw() {
    strokeWeight(5);
    colorMode(RGB, 1, 1, 1, 1);
    stroke(sin(frameCount * params.R_Speed) * 0.5 + 0.5, sin(frameCount * params.G_Speed) * 0.5 + 0.5, sin(frameCount * params.B_Speed) * 0.5 + 0.5);
    translate(width / 2, height / 2);
    rotate(frameCount * params.Spin_Speed);
    line(-75, 0, 75, 0);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map
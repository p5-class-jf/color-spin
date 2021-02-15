// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    R_Speed: 0.0385,
    G_Speed: 0.0314,
    B_Speed: 0.0071,
    Spin_Speed: 0.05,
    Download_Image: () => save(),
}
gui.add(params, "R_Speed", 0, 0.05, 0.0001)
gui.add(params, "G_Speed", 0, 0.05, 0.0001)
gui.add(params, "B_Speed", 0, 0.05, 0.0001)
gui.add(params, "Spin_Speed", 0, 0.20, 0.0001)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    strokeWeight(5)
    colorMode(RGB, 1, 1, 1, 1)
    stroke(
        sin(frameCount*params.R_Speed) * 0.5 + 0.5,
        sin(frameCount*params.G_Speed) * 0.5 + 0.5,
        sin(frameCount*params.B_Speed) * 0.5 + 0.5,
    )
    translate(width/2, height/2)
    rotate(frameCount * params.Spin_Speed)
    line(-75, 0, 75, 0)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}
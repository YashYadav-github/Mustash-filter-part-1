
function preload() {
  mustash = loadImage('moustache-png-17164.png');
}

function setup() {
  canvas = createCanvas(300, 300);
    canvas.center()
}

function draw() {
  image(mustash, 0, 0, 300, 300);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

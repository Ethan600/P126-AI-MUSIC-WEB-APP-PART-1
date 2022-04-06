song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Alone-Alan Walker.mp3");
    song2 = loadSound("TDFW - DJ Snake, Lil Jon.mp3");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
}
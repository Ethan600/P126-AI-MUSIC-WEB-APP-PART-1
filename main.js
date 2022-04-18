scoreLeftWrist = 0;

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

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
    
    poseNet = ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}


function gotPoses(result){
   if(result.length > 0){
        console.log(result);
       
       leftHandWristX = result[0].pose.leftWrist.x;
        leftHandWristY = result[0].pose.leftWrist.y;
        console.log("The left hand wrist's x = " + leftHandWristX + "and the y =" + leftHandWristY);

        rightHandWristX = result[0].pose.rightWrist.x;
        rightHandWristY = result[0].pose.rightWrist.y;
        console.log("The right hand wrist's x = " + rightHandWristX + "and the y =" + rightHandWristY);
   }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

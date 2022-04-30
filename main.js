scoreLeftWrist = 0;
scoreRightWrist = 0;

song1_status = "";
song2_status = "";

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
       
       scoreLeftWrist = result[0].pose.keypoints[9].score;
       scoreRightWrist = result[0].pose.keypoints[10].score;
        console.log("score of left wrist = " + scoreLeftWrist);
        console.log("score of right wrist =" + scoreRightWrist);
       
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
    
    fill("red");
    stroke("red");
    
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
    
    if(scoreRightWrist > 0.2){
        circle(rightHandWristX, rightHandWristY, 20);
        song1.stop();
        
        if(song2_status == false){
            song2.play();
            document.getElementById("song").innerHTML = "Song Played: Turn Down For What - DJ Snake, Lil Jon";
        }
    }
    
    if(scoreLeftWrist > 0.2){
        circle(leftHandWristX, leftHandWristY, 20);
        song2.stop();
     
        if(song1_status == false){
            song1.play();
                    document.getElementById("song").innerHTML = "Song Played: Alone - Alan Walker";
        }
        
    }
        

}

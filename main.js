noseX=0;
noseY=0;
difference=0;
rightwristX=0
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    Canvas=createCanvas(550,550);
    Canvas.position(560,150);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+" noseY = "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("leftwristX = "+leftwristX+" rightwristX = "+rightwristX+"difference = "+difference);
    }
}

function draw(){
    background('#969a97');
    textSize(difference);

    fill("#f90093");
    text('Yajat',60,450)
    
}




function setup(){
    video = createCapture(VIDEO);
    video.size(250,250);
    canvas = createCanvas(250,250);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("modal loaded");
}

function draw(){
    canvas.background("#FF0000");
    textSize(40);
    fill("#FF0000");
    text("Reyaansh" , 10 , 100)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = ml5.pose.leftWrist.x;
        rightWristX = ml5.pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        textSize(difference);
        
    }
}
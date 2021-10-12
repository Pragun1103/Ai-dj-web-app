song="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scorelw=0;
scorerw=0;
song_status="";
song_status2="";
function preload(){
    song=loadSound("Believer_192(PagalWorld).mp3");
    song2=loadSound("02 Love Dose (Desi Kalakaar) Yo Yo Honey Singh.mp3 ");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on("pose",gotposes);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#000000");
song_status=song.isPlaying();
song_status2=song2.isPlaying();
    
    if(scorelw>0.2){
        circle(leftwristx,leftwristy,20);
        song2.stop();

        if(song_status==false){
            song.play();
            document.getElementById("song_name").innerHTML="Believer";
        }
    }

    if(scorerw>0.2){
        circle(rightwristx,rightwristy,20);
        song.stop();

        if(song_status2==false){
            song2.play();
            document.getElementById("song_name").innerHTML="Love Dose";
        }
    }
}
function modeloaded(){
    console.log("poseNet is Initialized ");
}
function gotposes(result){
if(result.length>0){   
     console.log(result);
     scorelw=result[0].pose.keypoints[9].score;
     scorerw=result[0].pose.keypoints[10].score;
      console.log("Score left wrist = "+scorelw +"Score right wrist = "+scorerw);
     leftwristx=result[0].pose.leftWrist.x;
     leftwristy=result[0].pose.leftWrist.y;
     console.log("Left wrist x = "+ leftwristx+"left Wrist y = "+ leftwristy);

     rightwristx=result[0].pose.rightWrist.x;
     rightwristy=result[0].pose.rightWrist.y;
     console.log("right wrist x = "+ rightwristx+"right wrist y = "+rightwristy);

}

}
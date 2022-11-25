diferencia = 0;
noseX = 0;
noseY = 0;
derechaX = 0;
izquierdaX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet se inicializo");
}
function gotPoses(results){
   if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        izquierdaX = results[0].pose.leftWrist.x;
        derechaX = results[0].pose.rightWrist.x;
        diferencia = floor(izquierdaX - derechaX);
   }
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadardo sera = "+ diferencia + "px";
    fill('#66FF66');
    stroke('#0000FF');
    square(noseX, noseY, diferencia);
}
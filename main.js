img = "";
Status = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,600,500);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,60,410,430); 

    fill("#FF0000");
    text(" cat ", 320, 120);
    noFill();
    stroke("#FF0000"); 
    rect(300, 90, 270, 320);
}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResults);
} 

function gotResults(error, results){
 if (error){
    console.log(error);
 }
 console.log(results);
 }

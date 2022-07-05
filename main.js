Webcam.set({
    height:350,
    width:300,
    image_format:'png',
    png_qualitiy:90,
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_result" src="'+data_uri+'">';
    });
}

console.log("ml5 verison = ", ml5.verison);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WThcZfVsj/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speakData1="The first prediction is "+prediction1;
    speakData2="The second prediction is "+prediction2;
    var utterThis=new speechSynthesisUtterence(speakData1+speakData2);
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML = content;
    if(content == "Charizard is better than Pikachu." || content == "Charizard is better than Pikachu"){
        console.log("taking selfishie --- ");
        eat();
    }
}
function eat(){
   var syntheat = window.speechSynthesis;
   speakdata = "charizard is better so i will take a selfishie";//document.getElementById("textbox").value;
   var utterThis =new SpeechSynthesisUtterance(speakdata);
   syntheat.speak(utterThis);
   Webcam.attach(camera);

   setTimeout(function(){
    take_a_sanpshot();
    save_my_life();
   }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:110
})
camera = document.getElementById("cameraeRARARARARA");

function take_a_sanpshot(){
    Webcam.snap(function(booger) {
        document.getElementById("resolututtutuion").innerHTML = '<img id ="selfie_image" src="'+booger+'">';

    });
}

function save_my_life()
{
    link = document.getElementById("link");
    image = documnet.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
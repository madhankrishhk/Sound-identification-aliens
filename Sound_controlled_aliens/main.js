function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier + ml5.sounClassifier('https://teachablemachine.withgoogle.com/models/0ueard9at/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
///teachablemachine.withgoogle.com/models/hnmm7ggTg/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    }) ;
    classifier=ml5.soundClassifier('/teachablemachine.withgoogle.com/models/hnmm7ggTg/',modelReady);
}
function modelReady(){
    console.log("model is loaded");
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log("got the results");
    
}
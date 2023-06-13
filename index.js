// let dr=document.getElementById('we');
// let count= 0 ;
// let yt=0;

// let ww= document.getElementById('se');

// let wt= document.getElementById('re');

// function inc(){
//     count = count + 1;
//     dr.innerHTML=count;
// }

// function save(){
//     let countstr= count + "-";
//     ww.innerText += countstr;    
// }
// function reset(){
    
//     ww.innerText= 0 + "-";    
// }

// let ui=0;
// let coi=document.getElementById('we');
// let co=document.getElementById('se');

// function i(){
//     ui=ui+1;
//     coi.innerText=ui;
// }

// function o(){
//     ui=0;
//     coi.innerText=ui;
// }

// function s(){
//      ui=ui+",";

//     co.innerText=ui;
// }


// let i= document.getElementById('ty');
// let y= document.getElementById('tz');
// let n=document.getElementById('ans');



// let p= 12;
// let k= 23;
// let xs=p+k;
// let c=document.getElementById('ans');

// i.innerText=p;
// y.innerText=k;

// if(xs<21){
 
//     let lk="Do you want to draw a new card?";
//     n.innerHTML= lk;
// }
// else if(xs===21){
//     let lk="You have got black card";
//     n.innerHTML= lk;
// }
// else{
//     let lk="You are out of the game";
//     n.innerHTML= lk;
// }

let firstnumber=diceRollar();
let secondnumber=diceRollar();
let cardT=[firstnumber, secondnumber];
let son= cardT[0] + cardT[1];
let message="";
let hasBlackJack= false;
let isAlive= false;
let mt=document.getElementById('message-el');


let i=document.getElementById("su");

let c=document.getElementById('car');

function diceRollar(){
    
    let randomNumber= Math.floor( Math.random()*13)+1;
    if (randomNumber>10){
        return 10;
    }
    else if (randomNumber===1){
        return 11;
    }
    else{
        return randomNumber;
    }

}

function startgame(){
    let isAlive= true;


    renderGame();
}

function renderGame(){
    c.innerText= "Cards: ";
for(let y=0; y < cardT.length ; y++){
    c.textContent+= cardT[y]+" ";

}

    if (son<21){
    message="Do you want to draw a new card?";
    i.innerText= "Sum: "+ son;

}
else if(son===21){
    message="You have got blackjack!";
    let hasBlackJack= true;
    i.innerText= "Sum: "+ son;

}
else{
    message="You are out of the game! ";
    let isAlive= false;
    i.innerText= "Sum: "+ son;

}
mt.textContent=message;
}


function newCard(){

    let newCard=diceRollar();
    son+=newCard;
    cardT.push(newCard);    
    startgame()


}

// Promise.all([
//     faceapi.nets.ssdMobilenetv1.loadFromUri('models'),
//     faceapi.nets.faceLandmark68Net.loadFromUri('models'),
//     faceapi.nets.faceRecognitionNet.loadFromUri('models')
//   ]).then(startFaceRecognition);
  
//   // Start the face recognition process
//   function startFaceRecognition() {
//     // Get the video element and canvas
//     const video = document.createElement('video');
//     const canvas = document.getElementById('canvas');
//     const context = canvas.getContext('2d');
  
//     // Request camera access
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => {
//         video.srcObject = stream;
//         video.play();
//         detectFaces();
//       })
//       .catch(error => console.error(error));
  
//     // Detect faces in the video stream
//     function detectFaces() {
//       faceapi.detectAllFaces(video)
//         .withFaceLandmarks()
//         .withFaceDescriptors()
//         .then(detections => {
//           context.clearRect(0, 0, canvas.width, canvas.height);
//           const resizedDetections = faceapi.resizeResults(detections, canvas);
//           faceapi.draw.drawDetections(canvas, resizedDetections);
//           faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//           requestAnimationFrame(detectFaces);
//         });
//     }
//   }

// Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", async () => {
//     // Load the face recognition model
//     await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');

//     // Load the face landmark detection model
//     await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

//     // Load the face recognition model
//     await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

//     // Get video and canvas elements
//     const video = document.getElementById('videoElement');
//     const canvas = document.getElementById('canvasElement');

//     // Get a media stream from the webcam
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//     // Set the video source to the media stream
//     video.srcObject = stream;

//     // Event handler for when the video metadata is loaded
//     video.onloadedmetadata = () => {
//         // Start face detection
//         setInterval(async () => {
//             // Detect faces in the video frame
//             const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();

//             // Clear the canvas
//             const context = canvas.getContext('2d');
//             context.clearRect(0, 0, canvas.width, canvas.height);

//             // Draw face detection results on the canvas
//             faceapi.draw.drawDetections(canvas, detections);
//             faceapi.draw.drawFaceLandmarks(canvas, detections);
//         }, 100); // Face detection interval in milliseconds
//     };
// });


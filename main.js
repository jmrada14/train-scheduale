$(document).ready(function() {
var firebaseConfig = {
    
        apiKey: "AIzaSyDZiZZ1JW5O6XAHtxKpyW52oDt4HazHf7o",
        authDomain: "train-26a99.firebaseapp.com",
        databaseURL: "https://train-26a99.firebaseio.com",
        projectId: "train-26a99",
        storageBucket: "",
        messagingSenderId: "909724697017",
        appId: "1:909724697017:web:9a87c566a98a2cf1"
      };
   
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var database = firebase.database();
   console.log(database);

  $("#submit").on("click" , function(event){
event.preventDefault();
var trainName = $("#trainNameInput").val().trim();
var destination = $("#destinationInput").val().trim();
var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").format("X");
var frequency = $("#frequencyInput").val().trim();

console.log(trainName);
console.log(destination);
console.log(firstTrain);
console.log(frequency);

var output = {
    trainName : trainName,
    destination : destination,
    firstTrain : firstTrain,
    frequency : frequency
}

database.ref().push(output)
console.log(output)

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainInput").val("");
$("#frequencyInput").val("");
  }
  )

  database.ref().on("child_added", function(childSnapshot, key)
  {
console.log(childSnapshot.val());
var trainName = childSnapshot.val().trainNameBase;
var destination = childSnapshot.val().destinationBase;
var firstTrainTime = childSnapshot.val().firstTrainTimeBase;
var frequency = childSnapshot.val().frequencyBase;

  }
  )
}
)
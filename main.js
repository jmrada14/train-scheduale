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

   $("#submit").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrainTime = moment($("#firstTrainInput").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequencyInput").val().trim();
    
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
  
    var output = {
      trainName1: trainName,
      destination1: destination,
      firstTrainTime1: firstTrainTime,
      frequency1: frequency
    };
  
    database.ref().push(output);
  
    console.log(output.trainName1);
    console.log(output.destination1);
    console.log(output.firstTrainTime1);
    console.log(output.frequency1);
  
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTrainInput").val("");
    $("#frequencyInput").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot, Key) {
  
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().trainName1;
    var destination = childSnapshot.val().destination1;
    var firstTrainTime = childSnapshot.val().firstTrainTime1;
    var frequency = childSnapshot.val().frequency1;
  
    
    var minusYear = moment.unix(firstTrainTime, "hh:mm").subtract(1, "years");
    var timeNow = moment();
    var timeDifference = moment().diff(moment(minusYear), "minutes");
    console.log("First Arrival: " +minusYear);
    console.log("Time Now: " +timeNow);
    console.log("difference: " + timeDifference)
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    frequency + "</td><td>" + formatNextTrainTime + "</td><td>" + minutesTillTrain + "</td></tr>")
  });
  

}
)
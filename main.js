$(document).ready(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyCkRmyddOmhABSGjo9JyiUA7kaSPAtP4SM",
    authDomain: "train-schedule-6c547.firebaseapp.com",
    databaseURL: "https://train-schedule-6c547.firebaseio.com",
    projectId: "train-schedule-6c547",
    storageBucket: "",
    messagingSenderId: "122322819314",
    appId: "1:122322819314:web:368f38ead2e07e2f"
  };
   
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var database = firebase.database();
   console.log(database);

   $("#submit").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTime = moment($("#firstTrainInput").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequencyInput").val().trim();
    
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);
  
    var output = {
      trainName1: trainName,
      destination1: destination,
      trainTime1: trainTime,
      frequency1: frequency
    };
  
    database.ref().push(output);
  
    console.log(output.trainName1);
    console.log(output.destination1);
    console.log(output.trainTime1);
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
    var firstTrainTime = childSnapshot.val().trainTime1;
    var frequency = childSnapshot.val().frequency1;
  
    
  var minusYear = moment.unix(firstTrainTime, "hh:mm").subtract(1, "years");
  var timeNow = moment();
  var timeDifference = moment().diff(moment(minusYear), "minutes");
  console.log("First Arrival: " +minusYear);
  console.log("Time Now: " +timeNow);
  console.log("difference: " + timeDifference)
  var timeRemainder = timeDifference % frequency;
  var minutesTillTrain = frequency - timeRemainder;
  var nextTrainTime = moment().add(minutesTillTrain, "minutes");
  var formatNextTrainTime = moment(nextTrainTime).format("hh:mm");
  var formatFirstTrainTime = moment(firstTrainTime).format("hh:mm");
  console.log(minutesTillTrain);
  console.log(formatNextTrainTime);
  console.log(formatFirstTrainTime);
  $("#table1 > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + formatNextTrainTime + "</td><td>" + minutesTillTrain + "</td></tr>")
  });
  

}
)
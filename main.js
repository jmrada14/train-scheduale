
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBToEAN7SqIAizc1ftGyuJGoNUT0jqVsfI",
    authDomain: "train-schedule-adaa5.firebaseapp.com",
    databaseURL: "https://train-schedule-adaa5.firebaseio.com",
    projectId: "train-schedule-adaa5",
    storageBucket: "train-schedule-adaa5.appspot.com",
    messagingSenderId: "974824042799",
    appId: "1:974824042799:web:4e48e5afda5e9aa7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dataRef = firebase.database();

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
  }
  )
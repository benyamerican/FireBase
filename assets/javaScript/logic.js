
// Overview
// In this assignment, you'll create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
// Setup
// We'll leave that up to you -- however you like. Just make sure you're using Firebase to store data, GitHub to backup your project, and GithHub Pages to host your finished site.
// Instructions
// Make sure that your app suits this basic spec:
// When adding trains, administrators should be able to submit the following:
// Train Name
// Destination 
// First Train Time -- in military time
// Frequency -- in minutes
// Code this app to calculate when the next train will arrive; this should be relative to the current time.
// Users from many different machines must be able to view same train times.
// Styling and theme are completely up to you. Get Creative!
// Bonus (Extra Challenges)
// Consider updating your "minutes to arrival" and "next train time" text once every minute. This is significantly more challenging; only attempt this if you've completed the actual activity and committed it somewhere on GitHub for safekeeping (and maybe create a second GitHub repo).
// Try adding update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
// As a final challenge, make it so that only users who log into the site with their Google or GitHub accounts can use your site. You'll need to read up on Firebase authentication for this bonus exercise.

/////////////////SCRIPT//////////////////////
//////////////////firebase ///////////////

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvTOHZovq8R-aKPWAnqXEnPvfCTTjdKcU",
    authDomain: "fir-hm-edadd.firebaseapp.com",
    databaseURL: "https://fir-hm-edadd.firebaseio.com",
    projectId: "fir-hm-edadd",
    storageBucket: "fir-hm-edadd.appspot.com",
    messagingSenderId: "1024416615976"
  };
  firebase.initializeApp(config);

/////////////global variables////////////
var dataBase = firebase.database();
var trainName;
var destination;
var timeSchedule;
var frequency;


$("#submit").on('click',function(){
    event.preventDefault();
   
    /////////////getting data from the form//////
    
    trainName = $("#trainName").val().trim();
    $("#trainName").val('');
    

    destination = $("#destination").val().trim();
    $("#destination").val('');

    timeSchedule = $("#time").val().trim();
    $("#time").val('');

    frequency = $("#frequency").val().trim();
    $("#frequency").val('');
    

  ////////saving data as an object in firebase/////
  if((trainName) && (destination) && (timeSchedule) && (frequency)){
  dataBase.ref().set({
     
      trainName:trainName,
      destination:destination,
      timeSchedule:timeSchedule,
      frequency:frequency,
    
  });
}else{console.log('You must fill out the form completely')}
 
});
dataBase.ref().on("value", function(snapshot) {

  ////Console.log change value/////////
  
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().timeSchedule);
    console.log(snapshot.val().frequency);

  
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
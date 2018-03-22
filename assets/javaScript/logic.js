
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

var database = firebase.database();


/////////////global variables////////////
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
    database.ref().push({
     
      trainName:trainName,
      destination:destination,
      timeSchedule:timeSchedule,
      frequency:frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
       
  });
}else{console.log('You must fill out the form completely')}
});
//  ,targeting shit saved in the firebase and show them in a table
database.ref().on("child_added", function(snapshot) {
    ////refreshes the page
    //$('#display').empty();
    // creating a stupid table to show the shit
  $("#display").append
  ("<tr><td>" + snapshot.val().trainName +
   " </td><td> "  + snapshot.val().destination +
    " </td><td> "  + snapshot.val().frequency +
     " </td><td> "  + snapshot.val().timeSchedule + 
      " </td></tr>");

      var tableRowObj = snapshot.val();
      var getFrequency = tableRowObj.frequency;
      var getTime = tableRowObj.timeSchedule;

      
     // console.log(getFrequency);
     // console.log(getTime);

      

      //console.log(Object.values(snapshot.val())[2]);
      //console.log(Object.values(snapshot.val())[3]);
});
//console.log(Object.values(snapshot.val()));
//Object.values(database)
// var time = new Date();
// var m = time.getMinutes();
// var h = time.getHours();
// var location = time();
// console.log(time);


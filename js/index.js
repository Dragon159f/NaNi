// Write your JS here
import {test, Thread} from './database.js';


console.log('test');

test();

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log(databaseValues);

$("#cats").append("<li>" + databaseValues.neko.neko1 + "</li>");
ref.set({
  threads: [
    {
      messages: "fda",
    }
  ]
  });
});

$("subbtn").click( function(){

  let thread = new Thread($("titleInput").val(), $("imageInput").val(), $("textInput").val())
  thread.pushToDatabase();
  
});
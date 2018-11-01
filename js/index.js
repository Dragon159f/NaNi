// Write your JS here
import test from './script2.js';

console.log('test');

test();

$("#subbtn").click(function(){
    var imgUrl = $("#imageInput").val();
    var string = $("#textInput").val();
});
var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log(databaseValues);
});
ref.set({
  
});

//$("#cats").append("<li>" + databaseValues["neko"][neko1] + "</li>");

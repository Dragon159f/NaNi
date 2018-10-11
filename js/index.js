// Write your JS here
import test from './script2.js';

console.log('test');

test();

$("#subbtn").click(){
    var imgUrl = $("#imageInput").val();
    var string = $("#textInput").val();

}
var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot) {
  const dbValue = snapshot.val();
  console.log(dbValue);
$("#cats").append("<li>" + databaseValues["neko"][neko1] + "</li>");
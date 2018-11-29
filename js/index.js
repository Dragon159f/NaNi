// Write your JS here
import {test, pushToDatabase} from './database.js';
import { displayData } from './display.js';


console.log('test');

test();

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log("my data",databaseValues);
  displayData(databaseValues);
/*ref.push({
  threads: [
    {
      messages: "fda",
    }
  ]
  });
*/
});


pushToDatabase(titleInput, imageInput, textInput, databaseRef);
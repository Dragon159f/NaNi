import {databaseRef} from './index.js';

export function test () {
  console.log('test2')
};

export class Thread {
  constructor(titleInput, imgURLInput, cptInput, ref){
    this.titleInput = titleInput;
    this.cptInput = cptInput;
    this.imgURLInput = imgURLInput;
  }
  pushToDatabase(){
    let newThread = {
      Title: this.titleInput,
      Caption: this.cptInput,
      ImageUrl: this.imgURLInput
    }
    databaseRef.push(newThread);
  
    return console.log("Sent.");
  }
}


/*export function pushToDatabase(titleInput, imgURLInput, cptInput, ref){
  let newThread = [{
    title: $(titleInput).val(),
    image: $(imgURLInput).val(),
    caption: $(cptInput).val()
  }]
  ref.push(newThread);

  return console.log("Sent.");
}
*/
import {databaseRef} from './index.js';

export function test () {
  console.log('test2')
};

export class Thread {
  constructor(titleInput, imgURLInput, cptInput, ref){
    this.titleInput = titleInput;
    this.imgURLInput = imgURLInput;
    this.cptInput = cptInput;
  }
  pushToDatabase(){
    let newThread = {
      Title: this.titleInput,
      ImageUrl: this.imgURLInput,
      Caption: this.cptInput
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
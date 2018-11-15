export function test () {
  console.log('test2')
};

export function pushToDatabase(titleInput, imgURLInput, cptInput, ref){
  let newThread = [{
    title: titleInput,
    image: imgURLInput,
    caption: cptInput
  }]
  ref.push(newThread);

  return console.log("Sent.");
}
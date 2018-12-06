$("#subbtn").click(function(){
  let titleText = $("#titleInput").val();
  let imgUrl = $("#imageInput").val();   
  let text = $("#textInput").val();
  
  $("#content").append(titleText);
  $("#content").append("<img src=" + imgUrl + ">");
  $("#content").append(text);
});

export function displayData(data){
  for(let name in data){
    //Appends the Title into the Content id
    $("#content").append("<h1 id='titleDisplay'>" + data[name].Title + "</h1>");
    console.log(data[name].Title);
    //Appends the Caption into the Content id
    $("#content").append("<img id='imgDisplay' src=" + data[name].ImageUrl + ">");
    console.log(data[name].ImageUrl);
    //$("#content").append();
    $("#content").append("<h1 id='captionDisplay'>" + data[name].Caption + "</h1>");
    console.log(data[name].Caption);
    //Appends the Image into the Content id
  }
}
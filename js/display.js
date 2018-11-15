let array = {
    Caption: "string",
    imageURL: "https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif"
}

$("#subbtn").click(function(){
  let titleText = $("#titleInput").val();
  let imgUrl = $("#imageInput").val();   
  let text = $("#textInput").val();
  $("#content").append("<img src=" + titleText + ">");
  $("#content").append("<img src=" + imgUrl + ">");
  $("#content").append(text);
  alert(imgUrl);
});   

console.log("this works!");
var array = {
    Caption: "string",
    imageURL: "https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif"
}

$("#subbtn").click(function(){
  var imgUrl = $("#imageInput").val();   
  var text = $("#textInput").val();
  $("#content").append("<img src=" + imgUrl + ">");
  $("#content").append(text);
}); 
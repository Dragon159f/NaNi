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
   // $("#content").append();
    $("#content").append("<img src=" + data[name].ImageUrl + ">");
    console.log(data[name].ImageUrl);
    //$("#content").append();
  }
}
$("#subbtn").click(function(){
  let titleText = $("#titleInput").val();
  let imgUrl = $("#imageInput").val();   
  let text = $("#textInput").val();
  location.reload();
});

export function displayData(data){
  for(let name in data){
    $("#content").append("<div class='card col-3' style='width: 18rem;'>" + 
    "<h2 class='card-title' id='titleDisplay'>" + data[name].Title + "</h2>" + 
    "<div class='card-body'>" + 
    "<img id='imgDisplay' class='card-img-top' src=" + data[name].ImageUrl + ">" + 
    "<p id='captionDisplay' class='card-text'>" + data[name].Caption + "</p>" + 
    "</div>" + 
    "</div>");    
  }
}
$("#subbtn").click(function(){
  let titleText = $("#titleInput").val();
  let imgUrl = $("#imageInput").val();   
  let text = $("#textInput").val();
  location.reload();
  /*
  $("#content").append(titleText);
  $("#content").append("<img src=" + imgUrl + ">");
  $("#content").append(text);
  */
});

export function displayData(data){
  for(let name in data){
    //Appends the Image into the Content id
    $("#content").append("<div class='card col-3' style='width: 18rem;'>" + 
    "<img id='imgDisplay' class='card-img-top' src=" + data[name].ImageUrl + ">" + 
    "<div class='card-body'>" + 
    "<h5 class='card-title' id='titleDisplay'>" + data[name].Title + "</h5>" + 
    "<p id='captionDisplay' class='card-text'>" + data[name].Caption + "</p>" + 
    "</div>" + 
    "</div>");    
  }
}

/*
for(let name in data){
  //Appends the Image into the Content id
  $("#content").append("<div class='card col-3' style='width: 18rem;'>" + "<img id='imgDisplay' class='card-img-top' src=" + data[name].ImageUrl + ">");
  console.log(data[name].ImageUrl);
  //Appends the Title into the Content id
  $("#content").append("<div class='card-body'>" + "<h5 class='card-title' id='titleDisplay'>" + data[name].Title + "</h5>");
  console.log(data[name].Title);
  //Appends the Caption into the Content id
  $("#content").append("<p id='captionDisplay' class='card-text'>" + data[name].Caption + "</p>" + "</div>" + "</div>");
  console.log(data[name].Caption);
  
}
*/
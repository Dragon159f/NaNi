function display(){
    $("#subbtn").click(){
      var imgUrl = $("#imageInput").val();
      var text = $("#textInput").val();
      $("#thread").append(imgUrl);
      $("#thread").append(text);
  }
  
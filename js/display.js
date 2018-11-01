function display(){
    $("#subbtn").click(function(){
      var imgUrl = $("#imageInput").val();
      var text = $("#textInput").val();
      $("#thread").append(imgUrl);
      $("#thread").append(text);
    }
)};
  
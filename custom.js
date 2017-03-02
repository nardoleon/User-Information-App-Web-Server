$(document).ready(function() {
  $( "#input" ).keyup(function() {
      var filedata = {
        input: $("#input").val()
          }
      $.post( "/search", filedata, function( response, textStatus ) {
        });
  });
});

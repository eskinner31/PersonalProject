$('button').click(function(){
  $(this).css('border', 'inset');
});

$('#visitButton').click(function() {
  $.get('http://127.0.0.1:8080/empty.JSON',function(data){
    console.log(data);
  });
});

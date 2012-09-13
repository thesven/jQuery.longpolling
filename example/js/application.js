$(function(){
  
  $.longpolling({
    pollURL: './get_data.php',
    successFunction: pollSuccess,
    errorFunction: pollError
  });
  
});

function pollSuccess(data, textStatus, jqXHR){
  var json = eval('(' + data + ')');
  $('body').html(json['data']);
}

function pollError(jqXHR, textStatus, errorThrown){
  console.log('Long Polling Error: ' + textStatus);
}
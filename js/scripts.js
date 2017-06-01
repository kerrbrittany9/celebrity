$(document).ready(function() {
  $("form#soulmate").submit(function(event) {
    event.preventDefault();
    var pet = $("select#pet").val();
    var romantic_getaway = $("select#romantic_getaway").val();

// console.log('test')
    if (pet === 'turtle' && romantic_getaway === 'beach') {
      $('#kelly').show();
    } else {
      $('#michelle').show();
    }
  });
});

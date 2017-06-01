$(document).ready(function() {
  $("form#soulmate").submit(function(event) {
    event.preventDefault();
    var pet = $(select#pet).val());
    var romantic_getaway =$(select#romantic_getaway).val());

    if (pet === turtle) {
      $('#kelly').show();

    if (pet === dog) {
      $('#michelle').show();
    }
  });
});

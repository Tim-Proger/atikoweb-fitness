$("#sendMail").on("click", function() {
  var name = $("#name").val().trim();
  var phone = $("#phone").val().trim();

  $.ajax({
    url: "ajax/maol.php",
    type: "POST",
    cache: false,
    data: {"name" : name, "phone" : phone},
    dataType: "html",
    beforeSend: function() {
      $("#sendMail").prop("disabled", true);
    },
    success: function(data) {
      alert(data);
      $("#sendMail").prop("disabled", false);
    }
  });

});

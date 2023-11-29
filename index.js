function openForm() {
  document.getElementById("myForm").style.display = "block";
  history.pushState({ formIsOpen: true }, "", "#contact-form");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  history.pushState({ formIsOpen: false }, "", "/");
}

window.onpopstate = function(event) {
  if (event.state && event.state.formIsOpen) {
    openForm();
  } else {
    closeForm();
  }
};
$('#myForm').submit(function(event) {
  event.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: 'https://formcarry.com/s/zOWGYg-Ual', 
    data: formData,
    success: function(response) {
      console.log('Данные успешно отправлены');
    },
    error: function() {
      console.log('Произошла ошибка при отправке данных');
    }
  });
});

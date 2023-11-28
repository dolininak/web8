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
// Обработчик события отправки формы
$('#myForm').submit(function(event) {
  // Отменяем стандартное поведение формы
  event.preventDefault();

  // Получаем данные из формы
  var formData = $(this).serialize();

  // Отправляем данные на сервер
  $.ajax({
    type: 'POST',
    url: 'https://formcarry.com/s/zOWGYg-Ual', // Замените на адрес вашего сервера
    data: formData,
    success: function(response) {
      // Действия при успешной отправке данных
      console.log('Данные успешно отправлены');
    },
    error: function() {
      // Действия при ошибке отправки данных
      console.log('Произошла ошибка при отправке данных');
    }
  });
});

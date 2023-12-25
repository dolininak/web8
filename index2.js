
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
const form=document.getElementById('form');
const inputName = document.getElementById('formName');
const inputTel = document.getElementById('formTel');
const inputEmail = document.getElementById('formEmail');
const inputMessage = document.getElementById('formMessage');
const inputCompany = document.getElementById('formCompany');


window.onload = function() {
  const savedName = localStorage.getItem('formName');
  const savedTel = localStorage.getItem('formTel');
  const savedEmail = localStorage.getItem('formEmail');
  const savedMessage = localStorage.getItem('formMessage');
  const savedCompany = localStorage.getItem('formCompany');

  if (savedName) {
    inputName.value = savedName;
  }
  if (savedEmail) {
    inputEmail.value = savedEmail;
  }
  if (savedMessage) {
    inputMessage.value = savedMessage;
  }
  if (savedTel) {
    inputTel.value = savedTel;
  }
  if (savedCompany) {
    inputCompany.value = savedCompany;
  }
}

form.addEventListener('input', function(event) {
  if (event.target.matches('input, textarea')) {
    localStorage.setItem('formName', inputName.value);
    localStorage.setItem('formEmail', inputEmail.value);
    localStorage.setItem('formMessage', inputMessage.value);
    localStorage.setItem('formTel', inputTel.value);
    localStorage.setItem('formCompany', inputCompany.value);
  }
});
  
  form.addEventListener('submit', formSend);
  async function formSend(e){
      e.preventDefault();
      let error =formValidate(form);
      let formData = new FormData(form);
      if (error===0){
          let response=await fetch('https://formcarry.com/s/zOWGYg-Ual',{
              method:'POST',
              body:formData
          });
          if (response){
            alert('форма отправлена');
          }else{
            alert('ошибка');
          }
      }
      else {
          alert('Заполните обязательные поля');
      }
  
  }
  function formValidate(form){
      let error=0;
      let formReq=document.querySelectorAll('._req');
      for (let index=0; index< formReq.length;index++){
          const input= formReq[index];
          formRemoveError(input);
          if(input.classList.contains("_email")){
              if(emailTest(input)){
                  formAddError(input);
                  error++;
              }
          }
          else if(input.classList.contains("_tel")){
              if(telTest(input)){
                  formAddError(input);
                  error++;
              }
  
          }
          else if(input.getAttribute("type")==="checkbox" && input.checked===false){
              formAddError(input);
                  error++;
          }
          else{
              if (input.value===''){
                  formAddError(input);
                  error++;
              }
          }
      }
      return error;
  }
  function emailTest(input){
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  function telTest(input){
      return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
  }
  function formAddError(input){
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
  }
  function formRemoveError(input){
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
  }

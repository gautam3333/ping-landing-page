const email = document.querySelector('.input-email');
const errorMsg = document.querySelector('.email-error-msg');

function validar(email) {
  const pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

email.focus();

function handleValidation(event) {
  event.preventDefault();

  if (validar(email.value) === false || email.length === 0) {
    errorMsg.style.opacity = '1';
    errorMsg.style.pointerEvents = 'all';
    errorMsg.style.visibility = 'visible';
    email.style.border = '1px solid hsl(354, 100%, 66%)';
  } else {
    email.style.border = '';
    errorMsg.style.opacity = '';
    errorMsg.style.pointerEvents = '';
    errorMsg.style.visibility = '';
    alert('Subscription completed successfully! Thank you!');
    email.value = '';
    email.focus();
  }
}

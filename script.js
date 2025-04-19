document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const date = document.getElementById('date');


  removeWarnings();

  let hasError = false;

  if (email.value.trim() === '') {
    showWarning(email, 'Preencha o e-mail');
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showWarning(email, 'E-mail inválido');
    hasError = true;
  }

  if (password.value.trim() === '') {
    showWarning(password, 'Preencha a senha');
    hasError = true;
  } else if (password.value.length < 6) {
    showWarning(password, 'A senha deve ter pelo menos 6 caracteres');
    hasError = true;
  }

  if (name.value.trim() === '') {
    showWarning(name, 'Preencha o nome');
    hasError = true;
  } else if (/\d/.test(name)){
    showWarning(name, 'O nome deve conter apenas letras')
    hasError = true;
  }

  document.querySelector('button').disabled = hasError;

  if (!hasError) {
    this.submit();
  }
});

function showWarning(input, message) {
  const aviso = document.createElement('span');
  aviso.classList.add('warning');
  aviso.innerText = message;
  input.insertAdjacentElement('afterend', aviso);
}

function removeWarnings() {
  document.querySelectorAll('.warning').forEach(w => w.remove());
}

document.getElementById('email').addEventListener('input', enableSubmit);
document.getElementById('password').addEventListener('input', enableSubmit);
document.getElementById('name').addEventListener('input', enableSubmit);
document.getElementById('surname').addEventListener('input', enableSubmit);
document.getElementById('date').addEventListener('input', enableSubmit);



function enableSubmit() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const date = document.getElementById('date');

  const emailValido = email.value.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  const senhaValida = password.value.trim() !== '' && password.value.length >= 6;
  const nomeValido = name.value.trim() !== '' && !/\d/.test(name.value);

  document.querySelector('button').disabled = !(emailValido && senhaValida && nomeValido);
}

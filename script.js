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
  const nome = document.getElementById('name');
  const sobrenome = document.getElementById('surname');
  const idade = document.getElementById('date');
  const email = document.getElementById('email');
  const senha = document.getElementById('password');

  const campos = [
    { el: nome, msgVazio: 'Preencha o nome' },
    { el: sobrenome, msgVazio: 'Preencha o sobrenome' },
    { el: idade, msgVazio: 'Preencha a idade' },
    { el: email, msgVazio: 'Preencha o e-mail' },
{
  el: senha,
  validate: value => {
    if (value.trim() === '') return 'Preencha a senha';
    if (value.length < 6) return 'A senha deve ter pelo menos 6 caracteres';
    return null;
  }
}
  ];

  let tudoValido = true;

  campos.forEach(campo => {
    const valor = campo.el.value.trim();
    const warning = campo.el.parentElement.querySelector('.warning');

    if (valor === '') {
      tudoValido = false;
      if (!warning) {
        showWarning(campo.el, campo.msgVazio);
      }
    } else {
      if (warning) warning.remove();
    }
  });

  return tudoValido;
}



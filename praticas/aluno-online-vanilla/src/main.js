import './style.css'
const loginForm = document.getElementById('pag');
const emailInput = document.getElementById('matricula');
const senhaInput = document.getElementById('senha');

const errorEmail = document.getElementById('error-email');
const errorSenha = document.getElementById('error-senha');

loginForm.addEventListener('submit', (event) => {
  let hasError = false;

  
  errorEmail.textContent = '';
  errorSenha.textContent = '';

  
  if (emailInput.value.trim() === '') {
    errorEmail.textContent = 'O campo de email é obrigatório.';
    hasError = true;
  }

 
  if (senhaInput.value.trim() === '') {
    errorSenha.textContent = 'O campo de senha é obrigatório.';
    hasError = true;
  }

  
  if (hasError) {
    event.preventDefault();
  } else {
    console.log('Dados prontos para envio:', {
      email: emailInput.value,
      senha: senhaInput.value
    });
  }
});
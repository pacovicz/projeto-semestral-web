function cadastrar(event, form) {
  event.preventDefault();
  const erroContainer = document.querySelector('.erro');
  const sucessoContainer = document.querySelector('.sucesso');
  erroContainer.innerHTML = '';
  erroContainer.classList.add('escondido');
  sucessoContainer.innerHTML = '';
  sucessoContainer.classList.add('escondido');


  const formData = new URLSearchParams(new FormData(form))
  fetch('../../php/criarUsuario.php', {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        erroContainer.innerHTML = data.mensagem;
        erroContainer.classList.remove('escondido');
        return;
      }

      sucessoContainer.innerHTML = 'Usuário cadastrado com sucesso!';
      sucessoContainer.classList.remove('escondido');
    });
}
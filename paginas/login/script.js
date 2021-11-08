function login(event, form) {
  event.preventDefault();
  const erroContainer = document.querySelector('.erro');
  erroContainer.innerHTML = '';
  erroContainer.classList.add('escondido');

  const formData = new URLSearchParams(new FormData(form))
  fetch('../../php/login.php', {
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

      localStorage.setItem('usuario', JSON.stringify(data));
      window.location.href = '../../index.html'
    });
}
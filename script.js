const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

 
  const depoimento = document.getElementById('depoimento').value;

  if (!depoimento.trim()) {
    alert('Por favor, preencha o campo depoimento antes de enviar.');
    return; 
  }

  btn.value = 'enviando...';

  const serviceID = 'service_r4m5zvg';
  const templateID = 'template_1jsonvw';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'enviando depoimento';
      alert('Depoimento enviado!');

      document.getElementById('depoimento').value = '';
      document.getElementById('from_name').value = '';

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

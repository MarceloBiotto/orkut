const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'service_r4m5zvg';
   const templateID = 'template_1jsonvw';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'enviando depoimento';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
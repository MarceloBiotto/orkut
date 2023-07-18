(function() {
    emailjs.init('Vv5jqgx_K3lKM8iU_');
  })();
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    var message = document.getElementById("message").value;
  
    // Envie o email usando EmailJS
    var templateParams = {
      message: message
    };
  
    emailjs.send('service_r4m5zvg', 'template_1jsonvw', templateParams)
      .then(function(response) {
        console.log("Email enviado com sucesso!", response.status, response.text);
        // Exiba uma mensagem de sucesso para o usuário
        alert("Mensagem enviada com sucesso!");
      }, function(error) {
        console.log("Ocorreu um erro ao enviar o email:", error);
        // Exiba uma mensagem de erro para o usuário
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
      });
  
    // Limpa o campo de mensagem após o envio
    document.getElementById("message").value = "";
  });
  
  document.getElementById("clearButton").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão
  
    // Limpa o campo de mensagem
    document.getElementById("message").value = "";
  });
  
function capturarInput() {
    
    var input = prompt("Digite um nome:");
  
    
    var person = { "name": input };
  
    
    if (person.name === "ricardo") {
      document.getElementById("imagem").innerHTML = '<img src="ricardo.png" alt="Foto de Ricardo">';
    } else if (person.name === "adao") {
        document.getElementById("imagem").innerHTML = '<img src="adao.png.jpg" alt="Foto de adao">';
    }else if(person.name === "alessandra"){
        document.getElementById("imagem").innerHTML = '<img src="alessandra.png" alt="Foto da ally">';
    }
    else if (person.name === "geovane") {
        document.getElementById("imagem").innerHTML = '<img src="geovane.png" alt="Foto de geovane">';
    }else {
      
      document.getElementById("imagem").innerHTML = '<p>Não foi encontrada uma imagem para o nome introduzido.</p>';
    }
  }

function add() {
    const valorInput = document.getElementById("valor");
    const listaValores = document.getElementById("valores");
    
    const node = document.createElement("li");
    const valor = document.createTextNode(valorInput.value);
    node.appendChild(valor);
    
    listaValores.appendChild(node);
    
    valorInput.value = "";
  }
  
  function ordenar() {
    const listaValores = document.getElementById("valores");
    const algoritmoSelecionado = document.getElementById("algoritmo").value;
    
    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    
    if (algoritmoSelecionado === "bubble") {
      bubble_sort(valores);
    } else if (algoritmoSelecionado === "selection") {
      selection_sort(valores);
    } else if (algoritmoSelecionado === "quick") {
      quick_sort(valores);
    }
    
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join("");
  }
  
  function misturar() {
    const listaValores = document.getElementById("valores");
    
    const valores = Array.from(listaValores.children).map(item => parseInt(item.innerHTML));
    
    shuffle(valores, valores.length * 2);
    
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).join("");
  };
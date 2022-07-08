const teste = (titulo, esperado, retorno) => {
  if (esperado === retorno) {
    console.log(`${titulo} O teste deu certo :)`);
  } else {
    console.error(`${titulo} O teste deu ruim :(`);
  }
};

teste("somaCompras", 10, somaCompras(50, 5));
teste("estoque", 20, estoque(50, 30));
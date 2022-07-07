const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

const teste = (titulo, esperado, retorno) => {

  if (esperado === retorno) {
    console.log(`O ${titulo} teste deu certo :)`);
  } else {
    console.error(`O ${titulo} teste deu ruim :(`);
  }
};

teste("somaCompras", 55, somaCompras(50, 5))
teste("estoque", 20, estoque(50, 30))
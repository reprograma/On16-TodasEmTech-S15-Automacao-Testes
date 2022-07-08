const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

const teste = (titulo, esperado, retorno) => {
  if (esperado === retorno) {
    console.log(`${titulo}: O teste deu certo :)`);
  } else {
    console.error(`${titulo}: O teste deu ruim :(`);
  }
};

teste("somaCompras", 55, somaCompras(50, 5))
teste("estoque", 2, estoque(50, 20))
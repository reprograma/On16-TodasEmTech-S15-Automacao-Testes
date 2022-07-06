const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

const teste = (titulo, esperado, retorno) => {
  if (esperado === retorno) {
    console.log(` ${titulo}, o teste deu certo :)`);
  } else {
    console.error(`${titulo}, o teste deu ruim :(`);
  }
};

teste("somaCompras", 10, somaCompras(50, 5));
teste("estoque", 20, estoque(50, 30));

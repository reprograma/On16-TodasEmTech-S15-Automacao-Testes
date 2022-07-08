const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};
const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

const teste = (titulo, esperado, retornado) => {
if (esperado === retornado) {
  console.log(`${titulo} deu certo :)`);
} else {
  console.error(`${titulo} O teste deu ruim :(`);
 }
};

teste("somaCompras", 10, somaCompras(5, 5));
teste("estoque", 30, estoque(50, 20));

const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};

let esperado = 55;
let retorno = somaCompras(50, 5);

if (esperado === retorno) {
  console.log(`O teste deu certo :)`);
} else {
  console.error(`O teste deu ruim :(`);
}

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

esperado = 5;
retorno = estoque(10, 5);
if (esperado === retorno) {
  console.log(`O teste deu certo :)`);
} else {
  console.error(`O teste deu ruim :(`);
}
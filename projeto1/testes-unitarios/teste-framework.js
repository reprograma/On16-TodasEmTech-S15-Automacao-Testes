const somaCompras = (livroSelecionado, carrinho) => {
  return livroSelecionado + carrinho;
};

let esperado = 15;
let retorno = somaCompras(10, 5);

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
const carrinho = (produtoSelecionado, produtosCarrinho) => {
  return produtoSelecionado + produtosCarrinho;
};

module.exports = carrinho;

//BDD

//- Novo sistema de contagem de produtos selecionados. 

//- Todo usuário deverá possuir um contador para contabilizar produtos do carrinho. 

//- Vamos supor que um usuário, com carrinho zerado, selecionou 2 produtos no carrinho.

//- O contador carrinho, deverá constar a quantidade de 2 produtos selecionados.

//- QUando o usuário selecionar mais 3 produtos para carrinho.

//- Deverá contabilizar 5 produtos no carrinho.

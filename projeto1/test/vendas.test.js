const somaCompras = require("../testes-unitarios/compras");
const estoque = require("../testes-unitarios/estoque");

test("Deve retornar a soma das compras com taxa de entrega;", () => {
  const esperado = 2530;
  const retornado = somaCompras(2500, 30);

  expect(retornado).toBe(esperado); //trabalha fazendo comparações
});

test("Deve retornar o que restou no estoque;", () => {
  const esperado = 2500;
  const retornado = estoque(5000, 2500);

  expect(retornado).toBe(esperado);
});

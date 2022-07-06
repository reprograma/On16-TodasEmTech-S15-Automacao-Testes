const somaCompras = require ("../testes-unitarios/compras.js");
const estoque = require ("../testes-unitarios/estoque.js");

test("Deve retornar a soma das compras com taxa de entrega", () =>{
  const esperado = 2530;
  const retornado = somaCompras(2500, 30);

  expect(retornado).toBe(esperado)
})

test("Deve retornar a diferença que restou no estoque", () => {
  const esperado = 1900;
  const retornado = estoque(2000, 100);

  expect(retornado).toBe(esperado)
}) 




const Livro = require("../src/models/livros");

describe("Testes do Modelo Livros", () => {
  const livro = new Livro({
    id: 10,
    titulo: "Amora",
    autor: "Emicida",
    editora: "Companhia das Letrinhas",
    numeroPaginas: 44,
  });

  it("Deve chamar o schema e retornar um novo livro;", () => {
    expect(livro.titulo).toBe("Amora");
  });
  it("Deve salvar no banco de dados um novo livro;", () => {
    livro.save().then((dados) => {
        expect(dados.titulo).toBe("Amora")
    })
  })
});

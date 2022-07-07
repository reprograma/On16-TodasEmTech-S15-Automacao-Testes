const Livro = require("../src/models/livros.js")
describe('Testes do modelo Livros', () => {
    const livro = new Livro({
        "id": 10,
        "titulo": "Amora",
        "autor": "Emicida",
        "editora": "Companhia das Letras",
        "numeroPaginas": 44
    })
    it('should return the Schema and return a new book', () => {

        expect(livro.titulo).toBe('Amora')
    })
    it("Deve salvar no banco de dados o novo livro", () => {
        livro.save().then((dados) => {
            expect(dados.titulo).tobe("Amora");
        })
    })
})
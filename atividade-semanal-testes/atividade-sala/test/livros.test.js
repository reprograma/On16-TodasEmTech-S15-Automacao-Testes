const Livro = require('../src/models/livros');

describe('testes do modelo livros', () => {
    const livro = new Livro({
        'id': 10,
        'titulo': 'Amora',
        'autor': 'Emicida',
        'editora': 'Editora 010',
        'numeroPaginas': 44
    });

    it('Deve chamar o schema e retorna um novo livro', () => {
        expect(livro.titulo).toBe('Amora');
    });
    it('Deve salvar no banco de dados o novo livro', () => {
        livro.save().then((dados) => {
            expect(dados.titulo).toBe('Amora');
        })
    })
});

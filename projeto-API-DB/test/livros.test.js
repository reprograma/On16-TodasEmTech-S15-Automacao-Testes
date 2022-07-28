const livros = require('./models/livros.js');
const book = require('./models/livros.js');

describe('Teste Model livros', () => {
  const livros = new book({
    id: '10',
    titulo: 'Um Livro',
    autor: 'Autor do Livro',
    editora: 'Editora do Livro',
    numeroPaginas: '300',
  });
});
it('Deve retornar o livro adicionado', () => {
  expect(livros.titulo).toBe('Um Livro');
});
it('Deve salvar o livro criado no banco de dados', () => {
  livros.save().then((dados) => {
    expect(dados.titulo).toBe('Um Livro');
  });
});

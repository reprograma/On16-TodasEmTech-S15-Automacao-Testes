
# TESTES DE API

Olá! Se você está aqui, com certeza já aprendeu sobre testes estáticos e unitários, leitura de relatório das ferramentas ESLint e Jest.

Agora chegou o momento de fazermos testes integrados de API

Nós iremos testar a mesma API que trabalhamos na aula de Integração Banco de Dados. Para acessar a API, basta clicar [aqui](https://github.com/reprograma/On16-TodasEmTech-S12-Intro-BD)

### Passo a passo - Instalação

Dentro do arquivo ``projeto-api-db``, você deverá realizar os seguintes passos:

- Instalar o ESLint, iniciar a ferramenta e configurar no mesmo estilo que fizemos na pasta projeto1.

```js
npm install --save-dev eslint@8.16.0 --save-exact
```
```js
npx eslint --init
```
- Também precisamos instalar a ferramenta Jest, para conseguirmos visualizar os relatórios de testes. 

```js
npm install --save-exact jest@28.1.0 --save-dev 
``` 

Não esqueça de criar o script no package.json, para facilitar no processo de execução do teste. 

```js
"test:watch": "jest --watchAll"
```

### Criando ambiente de teste

Agora que instalamos todas as dependências necessárias, podemos preparar nosso amniente de testes.

Na raiz do projeto, cria uma pasta chamada ``test``, dentro dela um arquivo chamado ``livros.test.js``. 

Para começar, deveremos importar o nosso schema modelo que está dentro da pasta models.

```js
const Livro = require("../models/livros.js");
```

Vamos começar a testar nossa rota de GET/READ da nossa API. Usando os métodos ``describe``, ``expect``, ``toBe``.

```js
describe("Testes do modelo Livros", () => {
  it("Deve chamar o schema e retornar um novo livro", () => {
    const livro = new Livro({
      id: 10,
      titulo: "Amora",
      autor: "Emicida",
      editora: "Companhia das Letrinhas",
      numeroPaginas: 44,
    });
    expect(livro.titulo).toBe("Amora");
  });
});

```

Vamos executar nosso primeiro teste no terminal? 

```js
npm run test:watch
```

Vamos fazer nosso segundo teste, iremos usar uma estrutura chamada de ``asserção``, que é um agrupamento de testes. 

Será preciso refatorar nosso código, fazendo algumas mudanças. 

```js
describe("Testes do modelo Livros", () => {
  const livro = new Livro({
    id: 10,
    titulo: "Amora",
    autor: "Emicida",
    editora: "Companhia das Letrinhas",
    numeroPaginas: 44,
  });
  it("Deve chamar o schema e retornar um novo livro", () => {
    expect(livro.titulo).toBe("Amora");
  });
})
```
Agora podemos continuar com os teste, usando a sintaxe de asserção, graças a função ``describe`` e a palavra reservada``it``.

Na linha seguinte, na penúltima chave e parenteses, vamos colocar um novo teste, iremos testar nossa rota Post/Create.

```js
  it("Deve salvar no banco de dados o novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amora");
    });
  });
```

O teste completo, deverá ficar da seguinte forma:

```js
const Livro = require("../src/models/livros.js");

describe("Testes do modelo Livros", () => {
  const livro = new Livro({
    id: 10,
    titulo: "Amora",
    autor: "Emicida",
    editora: "Companhia das Letrinhas",
    numeroPaginas: 44,
  });
  it("Deve chamar o schema e retornar um novo livro", () => {
    expect(livro.titulo).toBe("Amora");
  });
  it("Deve salvar no banco de dados o novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amora");
    });
  });
});
```



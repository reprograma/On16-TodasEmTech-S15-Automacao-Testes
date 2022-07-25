const Petshop = require('../src/model/petshop')

describe("Teste do model petshop", () => {

    const petshop = new Petshop({
        "id": 101,
        "nomeFantasia": "Petshop Cats&Dogs&Others",
        "endereco": "Avenida das Flores, 516",
        "telefone": 1111 - 2222,
        "atende": ["Cães", "gatos", "silvestres"]

    });

    test("Deve chamar o schema e retornar um novo livro", () => {
        expect(petshop.nomeFantasia).toBe("Petshop Cats&Dogs&Others");
    });

    test("Deve salvar no banco de dados o novo petshop", () => {
        petshop.save().then((dados) => {
            expect(dados.telefone).toBe("1111-2222");
        });
    });
});


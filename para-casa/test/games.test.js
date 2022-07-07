const Games = require("../games/src/models/games")
describe('Testes do modelo Games', () => {
    const game = new Games({
        "id": 10,
        "title": "Need For Speed",
        "launchYear": 2000,
        "consoles": "Play Station",
        "Liked": true
        })
    it('should return the Schema and return a new game', () => {

        expect(game.title).toBe('Need For Speed')
    })
    it("Deve salvar no banco de dados o novo livro", () => {
        game.save().then((dados) => {
            expect(dados.title).tobe("Need for Speed");
        })
    })
})
const episode = require("../src/models/series.js")

describe("Teste da Model de episodio", () => {
  const episodio = new episode({
    id: "52",
    code: "154",
    name: "um novo episodio",
    watched: true
})
  it("Deve chamar o Schema e retornar o episodio criado", () => {
    expect(episodio.name).toBe("um novo episodio")
  });
  it("Deve salvar o episodio criado no banco de dados", () => {
    episodio.save().then((dados) => {
      expect(dados.name).toBe("um novo episodio")
    })
  })
})
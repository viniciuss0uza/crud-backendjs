const nomes = new Array("Vinícius", "Jessica")

// criando a classe modelPessoa
class ModelPessoa {
    GetPessoas() {
        return nomes
    }
    CreatePessoa(nome) {
        return nomes.push(nome)
    }
    UpdatePessoa(id, nome) {
        return nomes[id] = nome
    }
    DeletePessoa(id) {
        return nomes.splice(id, 1)
    }
}
module.exports = new ModelPessoa()
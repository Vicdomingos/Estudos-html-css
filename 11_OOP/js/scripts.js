// 1 Metodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
};

animal.latir();

// 2- aprofundando em métodos
const pessoa = {
    nome: "Matheus",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },

};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));
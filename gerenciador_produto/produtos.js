//contem os produtos e funcoes de manipulacao

const produtos = [
    { "id": 1, "nome": "Caderno Universitário 200 folhas", "preco": 25.90 },
    { "id": 2, "nome": "Caneta Esferográfica Azul", "preco": 2.50 },
    { "id": 3, "nome": "Lápis Preto HB", "preco": 1.80 },
    { "id": 4, "nome": "Borracha Branca", "preco": 3.00 },
    { "id": 5, "nome": "Marcador de Texto Amarelo", "preco": 6.90 },
    { "id": 6, "nome": "Estojo Escolar", "preco": 29.90 },
    { "id": 7, "nome": "Bloco de Notas Adesivas", "preco": 12.50 },
    { "id": 8, "nome": "Grampeador Pequeno", "preco": 19.90 },
    { "id": 9, "nome": "Régua 30cm Transparente", "preco": 7.50 },
    { "id": 10, "nome": "Agenda 2025 Capa Dura", "preco": 39.90 }
]

function mapear(){
    return produtos.map(({nome}) => (nome)); //funcao nomeada retornando arrow function (funcao anonima reduzida)
}

function filtrar(){
    return produtos.filter(({preco}) => preco == "29.90"); //filer vai comparar o preço com o parametro de 29.90 dado
}

function reduzir(){//tem varios propositos: somar todos os numeros, achar o maior elemento e outros
    return produtos.reduce((acc,{preco}) => acc + (preco), 0); //valor inicial sempre será zero
    // acc é acumulador e curr o valor atual (preco nesse caso)
}

export default { //faz coleção com todas funcoes (default importa tudo como se fosse uma unica coisa)
    mapear,
    filtrar,
    reduzir
}


//arquivo principal que importa e executa as funcoes
import produtos from './produtos.js';//importa colecao inteira(todas as funcoes desse arquivo js)
//. indica pasta atual e / significa dentro da pasta

//mostra no terminal a funcao chamando a partir da colecao
console.log(produtos.mapear());
console.log(produtos.filtrar());//colecao.nomedafuncao
console.log("acumulador:", produtos.reduzir());//parenteses por ser funcao!
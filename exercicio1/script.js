/*let nome 
let idade 
console.log(typeof nome, idade)
// Indefinido porque não tem valor atribuído
nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, idade)
//após a variavel ter valor declarado, foi mostrado o seu tipo
console.log("Olá " + nome + " você tem " + idade + " anos ") */


let pergunta1 = "Você gosta de uva?"
let pergunta2 = "Você gosta de abacaxi?"
let pergunta3 = "Você tem um fusca?"


let gostaAbacaxi = prompt(pergunta2)
let temFusca = prompt(pergunta3)
let gostaUva = prompt(pergunta1)
console.log(gostaAbacaxi,temFusca , gostaUva)

console.log(pergunta1, gostaUva)
console.log(pergunta2, gostaAbacaxi)
console.log(pergunta3, temFusca)
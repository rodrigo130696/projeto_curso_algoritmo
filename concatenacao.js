/*
Var
// Seção de Declarações das variáveis 
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval ("Dgite o nome")
    leia(nome)
    escreval ("Dgite o numero")
    leia(numero)

    escreval ( nome, " : " , numero)

*/

var nome, numero
nome = prompt("Digite seu nome:")
numero = prompt("Digite seu numero:")

document.getElementById("paragrafo").innerText=nome + " : " + numero 


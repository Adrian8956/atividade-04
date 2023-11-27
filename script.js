
/* Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a 
quantidade de estudantes cadastrados e a lista com cada um deles.  */

function cadastrar(){
    let estudante = prompt("Qual o nome do estudante, digite 'PARE' para parar ");
    let lista_estudantes = []
    let numeros_de_Alunos = lista_estudantes.length;
    while(estudante != "PARE"){
        lista_estudantes.push(estudante);
        estudante = prompt("Qual o nome do estudante, digite 'PARE' para parar ");
    }
    alert(`A quantidade de alunos é ${numeros_de_Alunos}\n ${lista_estudantes}`);
} 

/* 
  Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de 
  um planeta. 
  Verifique se o planeta que o usuário informou está na array e informe ao usuário.
*/
 
function planetas(){
    let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
    let planeta = prompt("Digite o nome de um planeta");
    let resposta = planetas.indexOf(planeta);
    if(resposta != -1){
        alert("O planeta está na lista");
    }else{
        alert("O planeta não está na lista");
    }
}

/* 
    3
Vamos criar uma lista de compras. 

Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
*/

function lista_de_compras(){
    let frutas = ["Maça", "Banana", "Uva", "Melancia", "Abacaxi"];
    let fruta = prompt("Digite o nome de uma fruta");
    let resposta = frutas.indexOf(fruta);
    while(frutas.length != 0){
        if(resposta != -1){
            frutas.splice(resposta, 1);
            alert("Fruta foi retirada da lista");
            fruta = prompt("Digite o nome de uma fruta");
            resposta = frutas.indexOf(fruta);
        }else{
            alert("Fruta indisponível no nosso mercado");
            fruta = prompt("Digite o nome de uma fruta");
            resposta = frutas.indexOf(fruta);
        }
    }
    alert("Lista de compras finalizada");
}


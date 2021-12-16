//nome do aluno - n1 - n2- media- aprovado - reprovado

var nomes = ["EMANUELA","EDUARDO", "JOÃO"];
var notasA = [7.5, 6.0, 6];
var notasB = [9.9, 9.3, 7];

function media(n1,n2){
    return (n1 + n2) / 2;
}

function passou(media){
    if(media >= 7){
        return "aprovado";
    } else{
        return "reprovado";
    }
}

for(index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m     = media(nota1 , nota2);

    console.log(nomes[index] + " - primeira nota: " + nota1
     + " - segunda nota: " + nota2
      + " - media: " + media(nota1, nota2) + " - " + passou(m));
}


// ESSE FOR BUSCARÁ O VALOR EM CADA POSIÇÃO DO ARRAY, EM QUANTO O ANTERIOR BUSCARÁ O ÍNDICE.
for(let nome of nomes){
    console.log(nome);
}
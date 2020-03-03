let name = prompt("Qual o seu nome?");
let start = prompt("Olá, " + name + "! Você quer testar sua matemática? \n 1. Sim \n 2. Não");

if (start == 2)
{document.write("Que pena :( <br></br> Quem sabe numa próxima, " + name + "? <br></br> Até mais!")}

else if (start == 1)
{
let firstQuestion = prompt("Quanto é 1 + 1? \n 1. 0 \n 2. 1 \n 3. 2 \n 4. NDA")

let secondQuestion = prompt("Quanto é 2 + 3 x 5? \n 1. 25 \n 2. 10 \n 3. 17 \n 4. 11")

let thirdQuestion = prompt("Se eu tenho 40 laranjas, vendo 15, uso 7 pra fazer um suco, \n 4 pra fazer um bolo, quantas maçãs e restam? \n 1. 16 \n 2. 14 \n 3. 0 \n 4. 22")

{document.getElementById("participante").innerHTML = "Olá, " + name + "!"}



if(firstQuestion == 3)

{document.getElementById("resposta-1-correta").innerHTML = "Resposta 1, correta";}

else {document.getElementById("resposta-1-incorreta").innerHTML = "Resposta 1, errada";}

if(secondQuestion == 3)

{document.getElementById("resposta-2-correta").innerHTML = "Resposta 2, correta";}

else {document.getElementById("resposta-2-incorreta").innerHTML = "Resposta 2, errada";}

if(thirdQuestion == 3)

{document.getElementById("resposta-3-correta").innerHTML = "Resposta 3, correta";}

else {document.getElementById("resposta-3-incorreta").innerHTML = "Resposta 3, errada";}

}

else
{alert("Resposta inválida. Por favor, atualize a página.")}

var nomeHeroi = prompt("Escreva o nome do herói: ");
var xpHeroi = parseInt(prompt("Digite o número de XP do herói: "));
if(xpHeroi >= 0 && xpHeroi <= 1000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ferro.")
}else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Bronze.")
}else if(xpHeroi >= 2001 && xpHeroi <= 3000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Prata.")
}else if(xpHeroi >= 3001 && xpHeroi <= 4000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ouro.")
}else if(xpHeroi >= 4001 && xpHeroi <= 5000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Platina.")
} else if(xpHeroi >= 5001 && xpHeroi <= 6000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Diamante.")
}else if(xpHeroi >= 6001 && xpHeroi <= 7000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ascendente.")
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Imortal.")
}else if(xpHeroi >= 8001){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Radiante.")
}else{
    console.log("Valor de XP inválido (menor do que 0).")
}



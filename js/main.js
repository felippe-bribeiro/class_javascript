var nome = "Felippe Ribeiro"
var idade = 31;
var frase = "Felippe Lindo Demais"
alert(`Bem Vindo: ${nome} Você tem: ${idade} anos`);
console.log(nome);
console.log (frase.replace("Lindo", "Feio"));
console.log(frase.toUpperCase());

var lista = ["maça", "banana", "pato"];
console.log(lista);
console.log(lista[1]);
lista.push("manga");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"maça", cor:"verde"};
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome:"maça", cor:"verde"}, {nome:"banana", cor:"amarelo"}];
console.log(frutas);

console.log(frutas[1].nome);

var idade = prompt("Qual sua idade");

if(idade >18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
}

var count = 5;
while(count <10){
    console.log(count);
    count++
};

for (count =0; count <= 10; count++){
    console.log(count)
};

var d = new Date();
console.log(d);
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getDay()); // retorna dia da semana 0 para domingo, 1 segunda e assim via
console.log(123);

function redirecionar(){
    window.location.href = "index2.html"
}
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Corona", "Corona", "Influenza"));

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

/*var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
*/
function clicou(){
    document.getElementById("tnks").innerHTML = "Obrigado por Clicar!";
    console.log(document.getElementById("tnks"));
}

function redirecionar(){
    window.open("index.html");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o Mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
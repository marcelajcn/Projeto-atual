console.log('Trabalhando com operadores logicos');

const listaDeDestinos = new Array('Salvador', 
'São Paulo', 'Rio de Janeiro', 'Bahia');

const idadeComprador = 18;
const estaAcompanhada = false;



listaDeDestinos.push('Rio Grande do sul');

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

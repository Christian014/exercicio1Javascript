let oneNumber = 0;
let twoNumber = 0;
let result = 0;

oneNumber = prompt("Digite o primeiro numero");
twoNumber = prompt("Digite o primeiro numero");

if (oneNumber === twoNumber) {
    alert("numeros iguais")
}else{
    alert("numeros diferentes")
}

result = Number(oneNumber) + Number(twoNumber);
alert(`o resaultado da soma foi : ${result}`);

if (result % 2 == 0){
    alert("é um numero Par")
}else {
    alert("é um numero Impar")
}

result = Number(oneNumber) - Number(twoNumber);
alert(`o resaultado da subtracao foi : ${result}`);

result = Number(oneNumber) * Number(twoNumber);
alert(`o resaultado da multiplicacao foi : ${result}`);

result = Number(oneNumber) / Number(twoNumber);
alert(`o resaultado da divisao foi : ${result}`);

result = Number(oneNumber) % Number(twoNumber);
alert(`o resaultado do resto foi : ${result}`);


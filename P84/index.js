/*
let x = 1721871;
alert(x+" - "+typeof(x));
let i = 1;
for (; i < 8; i++) {
    console.log("Interação " + i);
}
console.log(i);

let num = prompt("introduza um valor:");
let snum = String(num);
switch (num) {
    case 100:case 101:
        alert("é 100")
        break;
    case 200: case 201:
        alert("é 200")
        break;
    default:
        alert("é invalido");
        break;
}
*/
//arrow  functions and Collback functions

function divisao(a,b) {
    
    if (b != 0)
        
        return(a/b);
    else
        return false;
    
}

let x=10;
let y=0;

if (divisao(x,y))
    alert(divisao(x,y));

function comprimento(turma1="PXX",turma2="PXX") {
    return `ola ${turma1} e ${turma2}, boa tarde`;
    
}
let greetings = comprimento;

alert(comprimento("P83","P84"));

//function comprimento(turma1="PXX",turma2="PXX") => `ola ${turma1} e ${turma2}, boa tarde`;
// => segnifica "ARROW" que serve como uma return se for so de uma linha se for
// ,mais de uma linha usas a mesma coisa mas metes return na mesma  , mas tem que ser na let 


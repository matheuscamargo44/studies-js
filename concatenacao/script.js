console.log("Concatenacao e interpolacao");
const num = 14.5;
console.log("O valor do produto é " + num);

console.log(`O valor do produto é ${num}`);

console.log(`Conversao entre number e string`);

const str1 = num.toString();
console.log(`O tipo de ${str1} é ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`O tipo de ${str2} é ${typeof str2}`);

const num1 = Number("14.5");
console.log(`O tipo de ${num1} é ${typeof num1}`);

const num2 = parseInt("21");
console.log(`O tipo de ${num2} é ${typeof num2}`);


const str = "Maria Silva  ";

console.log(`const str = "Maria Silva  "`);
const resultado = str.toLowerCase();
console.log(resultado);
console.log(`toLoweCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);
console.log(`replace: ${str.replace("i", "$")}`);

console.log(`replace: ${str.replace(/i/g, "$")}`);
console.log(`length: ${str.length}`);
console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`indexOf: ${str.lastIndexOf("i")}`);

console.log(`indexOf: ${str.substring(3, 8)}`);

const data = "14/10/2021";

const mes = Number(data.substring(3, 5));

console.log(mes);

const valor = "200.99";
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

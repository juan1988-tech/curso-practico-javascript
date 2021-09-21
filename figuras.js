//Cuadrado
console.group("Cuadrado")
function perimetroCuadrado(lado){
    return lado * 4;
}

console.log(`el perimetro del cuadrado es ${perimetroCuadrado(4)} cms`);

const areaCuadrado = (lado) => {
    return Math.pow(lado,2);
}
console.log(`el area de cuadrado es ${areaCuadrado(4)} cms`);
console.groupEnd();

//Triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}  
console.log(`el perimetro del triangulo es ${perimetroTriangulo(5,5,5)} cms`);
const areaTriangulo = (base,altura) => {
    return ( base * altura ) / 2;
}
console.log(`el area del triangulo es ${areaTriangulo(4,6)} cms`);
console.groupEnd();


//Círculo
console.group("Círculo");

function perimetroCirculo(radio){
    const pi = Math.PI;
    const diametro = radio * 2;
    return pi * diametro;
}

function areaCirculo(radio){
    return Math.PI * Math.pow(radio,2)
}
console.log(`el perimetro del círculo es ${perimetroCirculo(2)}`);
console.log(`el area del círculo se ${areaCirculo(1)}`)
console.groupEnd();


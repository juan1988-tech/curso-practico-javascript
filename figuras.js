//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`el lado del cuadrado es ${ladoCuadrado} cms`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perimetro del cuadrado es ${perimetroCuadrado} cms`);

const areaCuadrado = Math.pow(ladoCuadrado,2);
console.log(`el area del cuadrado es ${areaCuadrado} cms`);
console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 5,ladoTriangulo2 = 6, baseTriangulo = 4, alturaTriangulo = 4;
console.log(`los lados del triangulo son ${ladoTriangulo1} y  ${ladoTriangulo2} cms, y la base es ${baseTriangulo} cms`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`el perimetro del triangulos es ${perimetroTriangulo} cms`);

const areaTriangulo =(alturaTriangulo * baseTriangulo) / 2;
console.log(`el area del triangulo es ${areaTriangulo}`);
console.groupEnd();

//Círculo
console.group("Circulo");
const diametro = 4, pi =Math.PI;
console.log(`el diametro del círculo es ${diametro}`);

let areaCirculo =  parseInt(pi  * Math.pow((diametro/2),2));
console.log(`el area del círculo es ${areaCirculo}`);
console.groupEnd();
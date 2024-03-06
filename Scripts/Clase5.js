// Callback functions
const convertirAGradosCentigrados = gradosFahrenheit => (5/9)*(gradosFahrenheit-32);

const mostrarTemperatura = (callback, grados) => {
    // Usa la función que le llegó como parámetro
    let gradosCentigrados = callback(grados);
    console.log(gradosCentigrados);
}

mostrarTemperatura(convertirAGradosCentigrados, 70);

// Objetos
// Primera forma

const perro = {
    nombre: "Scooby",
    edad: 3,
    color: "Negro",
    nombrarPerro: function(nombre) {
        return this.nombre = nombre;
    },
    caracteristicas: {
        raza: "Bulldog Francés",
        altura: 20,
        peso: 30,
        vacunas: true,
        alimento: "nutrecan"
    }
}

// Segunda forma
const auto = {};
auto.modelo = 1986;
auto.colorv = "verde";
auto.caracteristicas = {
    marca: "BMW",
    cilindraje: 2500
};

console.log(auto)
console.log(perro)

// tercera forma
let colorr= "rojo";
let modelo= 1980;
let caracteristicas={
    marca:"Mercedes",
    cilindraje:3000
}
const carro = {colorr,modelo,caracteristicas}
console.log(carro);

// Cuara forma 
const Animal = new Object();
Animal.nombre = "serpiente";
Animal.especie = "cobra";
Animal.años = 4;
console.log(Animal);

// Acceder a cualquiera de las propiedades
// 1
console.log(perro.nombre)
console.log(perro.caracteristicas.raza)

// 2
console.log(perro['nombre']);
console.log(perro.caracteristicas['peso']);

const arreglo = [perro, Animal];
arreglo.forEach(elemento => {
    // Cambiar la propiedad nombre
    elemento.nombre = "Lola";
    // Nueva propiedad
    elemento.creadoEn = 2004;
    
});

console.log(perro);
console.log(Animal);

// Destructuring (Obtener las propiedades)
const {color} = perro;
console.log(color)

class Personas {
  constructor(nombre, apellido, edad, cedula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
  }
}

class Animales {
  constructor(nombre, genero, raza) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
  }
}

class Veterinario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
}



const persona1 = new Personas("Leonardo", "Artahona", 33, "1239417");
const animal1 = new Animales("Buster", "Macho", "Chuhuahua");
const veterinaria1 = new Veterinario("ColonVet", "Cra 48 a # 13a sur 25 ", "300 987 14 25");

const persona2 = new Personas("Oriana", "Leiva", 28, "1128229663");
const animal2 = new Animales("Vadin", "Macho", "Schnausser");
const veterinaria2 = new Veterinario("La Ganja", "Cl. 43a #9_23", "300 123 7869 ");


console.log("Persona 1:", persona1);
console.log("Persona 2:", persona2);

console.log("Animal 1:", animal1);
console.log("Animal 2:", animal2);

console.log("Veterinaria 1:", veterinario1);
console.log("Veterinaria 2:", veterinario2);
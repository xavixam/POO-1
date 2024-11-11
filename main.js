//Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona.
class Person {
    constructor(name, age, genre) {
        this.name = name
        this.age = age
        this.genre = genre
    }
    obtDetails() {
        console.log(`Tu nombre es ${this.name}, tienes ${this.age} años y eres ${this.genre}`);
    }
}

let xavi = new Person("Xavi", 25, "hombre")
xavi.obtDetails()

//Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por pantalla el resultado.
class Student extends Person {
    constructor (name, age, genre, course, group) {
      super(name, age, genre) 
      this.course = course;
      this.group = group;
    }
    register() {
        console.log(`Tu nombre es ${this.name}, tienes ${this.age} años, eres ${this.genre}, estas en el curso ${this.course} y eres del grupo ${this.group}`);
    }
};
 
let joan = new Student("Joan", 23, "hombre", "Full Stack", 1)
joan.register()

//Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por pantalla el resultado.
class Teacher extends Person {
    constructor (name, age, genre, asignatura, level) {
      super(name, age, genre) 
      this.asignatura = asignatura;
      this.level = level;
    }
    assign() {
        console.log(`Tu nombre es ${this.name}, tienes ${this.age} años, eres ${this.genre}, eres docente en el curso ${this.level} y eres del nivel ${this.level}`);
    }
};
 
let silvia = new Student("Silvia", 25, "mujer", "Full Stack", 1)
silvia.register()
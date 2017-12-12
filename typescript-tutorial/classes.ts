

// classes

class Person {
    public address: string = '';
    private _age: number = 0;


    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set age(value: number) {
        this._age = value;
    }

    constructor(public firstName: string, public lastName: string) {

    }

    sayHello() {
        console.log(`hello my name is: ${this.firstName}`);
    }

    static metaData() {
        console.log('this is class person');
    }
}

const yariv: Person = new Person('Yariv', 'Katz');
yariv.fullName;
yariv.age = 32;
Person.metaData();

class Student extends Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        public grade: number = 100){
            super(firstName, lastName);
        }

    sayHello() {
        super.sayHello();
        console.log('Im a student');
    }
}

const jbStudent: Student = new Student('foo', 'bar');

abstract class Pokemon {

}

const pikachu: Pokemon = new Pokemon();
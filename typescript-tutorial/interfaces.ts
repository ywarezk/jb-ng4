

// {firstName: ..., lastName: ...}

const dict: {firstName: string, lastName: string} = {firstName: 'yariv', lastName: 'katz'};

interface IPerson {
    firstName?: string;
    lastName: string;
    grade?: number | string;
    sayHello?: (arg1: string) => void;
}

const dict2: IPerson = {firstName: '', lastName: ''};

class Person implements IPerson {
    public lastName: string = '';
}

abstract class Person2 {
    sayHello() {
        console.log('hello')
    }

    abstract myAge(): number;
}

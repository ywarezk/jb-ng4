


// function that returns length
// array, string, class that has length




interface IHasLength {
    length: number
}


function whatIsMyLength(hasLengthProperty: any) {
    return hasLengthProperty.length;
}

function whatIsMyLength2(hasLengthProperty: IHasLength) {
    return hasLengthProperty.length;
}

function whatIsMyLength3<T extends IHasLength>(hasLengthProperty: T) {
    return hasLengthProperty.length;
}

class Person<T> {
    genricExample: T;

    constructor(public genericType: T){}
}

const personDemo: Person<string> = new Person<string>('hello');
const personDemo2: Person<string> = new Person('hello');

class User{
    public firstName: string = '';
    public lastName: string = '';
}



class AppUser extends User {
    public avatar: string = '';
}

class UserService<T extends User> {



}

class MyAppUserService {

}

const myService = new UserService<User>();
const myServiceCustomUser = new UserService<AppUser>();










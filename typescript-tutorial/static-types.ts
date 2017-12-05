

const myString2: string = 'hello world';

let myNumber2: number = 10;
// myNumber2 = 'hello world'; // Error!

let myBoolean = true;
// myBoolean = 'hello world'; // Error!


let myBackticks: string = `
hello world 
foo bar
${1 + 1}
${ myBoolean }
`

console.log(myBackticks);

let myAny: any = 'hello';
myAny = 10;
// myAny.hello(); // Error!
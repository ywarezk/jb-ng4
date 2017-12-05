var myString2 = 'hello world';
var myNumber2 = 10;
// myNumber2 = 'hello world'; // Error!
var myBoolean = true;
// myBoolean = 'hello world'; // Error!
var myBackticks = "\nhello world \nfoo bar\n" + (1 + 1) + "\n" + myBoolean + "\n";
console.log(myBackticks);

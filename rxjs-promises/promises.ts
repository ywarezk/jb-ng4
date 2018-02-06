/**
 * promise example
 */

 const promise: Promise<string> = new Promise((resolve, reject) => {
    console.log('will run right away');
    setTimeout(() => {
        console.log('resolving the timeout');
        resolve('hello world');
    }, 1000);
 });

//  promise.then

// promise.then

 const numberPromise: Promise<number | void> = promise.then(
     function (msg: string) {
         console.log(msg);
         return msg.length;
     },
     function onrejeced() {
         console.log('this will be called when promise calls reject');
         //return 0;
     }
 )

 // promise chaining

class Task {
    public title: string = '';
    public description: string = '';
}

 const serverPromise: Promise<{[key: string]: any}> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            title: 'stam task',
            description: 'stam description'
        })
    }, 2000);
 });
 
 
 const taskPromise: Promise<Task> = serverPromise.then(function onfulfilled(json: {[key: string]: any}){
    const task = new Task();
    task.title = json.title;
    task.description = json.description;
    return task;
 });

 // Promise Properties

 // 1. promise is not lazy

 // 2. promise can release one shout

 // 3. async logic will run only once not for every subscriber

 // 4. promises are not cancelable

 
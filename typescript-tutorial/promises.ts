

// promises

const myPromise: Promise<string> = new Promise<string>(function(resolve, reject) {
    
    setTimeout(function() {
        resolve('hello world');
        // reject(new Error('stam error'));
    }, 2000);

});

myPromise.then(
    function success(msg) {
        console.log(msg);
    }, 
    function error(err) {

    }
)
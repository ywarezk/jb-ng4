

fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(
    function success(res) {
        res.json().then(function data(tasks: Array<any>){
            console.log(tasks);
        });
    }
);
"use strict";
fetch('https://nztodo.herokuapp.com/api/task/?format=json').then(function success(res) {
    res.json().then(function data(tasks) {
        console.log(tasks);
    });
});
//# sourceMappingURL=ajax.js.map
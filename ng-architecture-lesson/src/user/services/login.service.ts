
// import {Injectable} from "@angular/core";
// import {Http} from "@angular/http";

// @Injectable()
export class LoginService {
    public name: string = '';

    // constructor(private http: Http) {}

    public get isLoggedIn(): boolean { // instance.isLoggedIn
        return this.name !== "";
    }

    // public isLoggedIn(): boolean { // instance.isLoggedIn()
    //     return this.name !== "";
    // }
}
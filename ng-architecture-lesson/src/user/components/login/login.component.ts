
import {Component} from "@angular/core";
import {LoginService} from "../../services/login.service";

@Component({
    selector: "jb-login", // <jb-login></jb-login>
    // selector: ".jb-login" // <div class="jb-login">...</div>
    // selector: "[jb-login]" // <div jb-login></div>
    // template: `
    //     <h1>hello user component</h1>
    // `
    templateUrl: "login.component.html"
})
export class LoginComponent {
    constructor(loginService: LoginService) {}
}
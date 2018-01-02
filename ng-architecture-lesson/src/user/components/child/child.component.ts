
import {Component} from "@angular/core"
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'jb-child',
    template: `
    <h1>hello child component</h1>
    `
})
export class ChildComponent {
    constructor(private loginService: LoginService) {}
}
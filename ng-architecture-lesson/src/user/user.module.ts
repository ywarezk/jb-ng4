
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {LoginService} from "./services/login.service";
import {BackgroundDirective} from "./directives/background.directive";
import {ChildComponent} from "./components/child/child.component";

@NgModule({
    declarations: [LoginComponent, BackgroundDirective, ChildComponent],
    imports: [
        CommonModule
    ],
    providers: [LoginService],
    exports: [LoginComponent]
})
export class UserModule {

}
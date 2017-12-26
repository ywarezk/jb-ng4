
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {LoginService} from "./services/login.service";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule
    ],
    providers: [LoginService],
    exports: [LoginComponent]
})
export class UserModule {

}
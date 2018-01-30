import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http';



export class BlankInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            headers: (new HttpHeaders()).set('Authorization', 'foo bar')
        });
        return next.handle(newReq);
    }

}
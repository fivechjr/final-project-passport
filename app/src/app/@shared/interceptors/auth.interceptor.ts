import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const copy = req.clone({
            headers: req.headers.set(
                'Authorization',
                'Bearer ' + localStorage.getItem('token') || '',
            ),
        });
        return next.handle(copy);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class HTTPService {
    static ROOT = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    get<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .get<T>(HTTPService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res.body));
    }

    post<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http.post<T>(HTTPService.ROOT + url, {
            ...params,
            observe: 'response',
        });
    }

    patch<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .patch<T>(HTTPService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res));
    }

    delete<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .delete<T>(HTTPService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res.body));
    }
}

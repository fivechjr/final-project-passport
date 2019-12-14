import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    // static ROOT = 'https://cu-passport-api-4rpvurby2a-an.a.run.app'; // Tokyo
    // static ROOT = 'https://cu-passport-api-production-4rpvurby2a-uc.a.run.app'; // Iowa
    // static ROOT = 'http://localhost:3000';
    static ROOT = 'http://34.87.64.139'; // Google Kubernates Engine

    constructor(private http: HttpClient) {}

    get<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .get<T>(ApiService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res.body));
    }

    post<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http.post<T>(ApiService.ROOT + url, {
            ...params,
            observe: 'response',
        });
    }

    formData<T>(url, params): Observable<T> {
        return this.http.post<T>(ApiService.ROOT + url, params);
    }

    patch<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .patch<T>(ApiService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res));
    }

    delete<T>(
        url: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T> {
        return this.http
            .delete<T>(ApiService.ROOT + url, { params, observe: 'response' })
            .pipe(map(res => res.body));
    }
}

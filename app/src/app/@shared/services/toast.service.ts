import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    public showToast$: BehaviorSubject<string> = new BehaviorSubject(null);
    constructor() {}
    showToast(text: string) {
        this.showToast$.next(text);
        // console.log('showToast');
        const timer$ = timer(2000);
        const interval$ = interval(1500);
        interval$.pipe(takeUntil(timer$)).subscribe(_ => {
            this.showToast$.next(null);
        });
    }
}

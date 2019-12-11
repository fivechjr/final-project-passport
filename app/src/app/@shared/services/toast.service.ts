import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    public showToast$: BehaviorSubject<string> = new BehaviorSubject(null);
    constructor() {}
    showToast(text: string) {
        this.showToast$.next(text);
        const timer$ = timer(2000);
        timer$.subscribe(_ => {
            this.showToast$.next(null);
        });
        // const interval$ = interval(1500);
        // interval$.pipe(takeUntil(timer$)).subscribe(_ => {
        // });
    }
}

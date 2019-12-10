import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { getContrastTextColor } from '../utils';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    animations: [
        trigger('enterAnimation', [
            transition(':enter', [
                style({
                    opacity: '0',
                    transform: 'translateX(-50%) translateY(-25%)',
                }),
                animate(
                    '150ms ease-in-out',
                    style({
                        opacity: '1',
                        transform: 'translateX(-50%) translateY(0%)',
                    }),
                ),
            ]),
            transition(':leave', [
                animate(
                    '150ms ease-in-out',
                    style({
                        opacity: '0',
                        transform: 'translateX(-50%) translateY(-25%)',
                    }),
                ),
            ]),
        ]),
    ],
})
export class ToastComponent implements OnInit {
    @Input() backgroundColor: string = '#ffffff';

    public color: string;
    public showToast$: BehaviorSubject<string> = new BehaviorSubject(null);
    constructor(private readonly toastService: ToastService) {
        this.color = getContrastTextColor(this.backgroundColor);
        this.toastService.showToast$.subscribe(v => {
            this.showToast$.next(v);
        });
    }
    ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { getContrastTextColor } from '../utils';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
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

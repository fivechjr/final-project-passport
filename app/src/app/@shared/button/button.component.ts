import { Component, Input, OnInit } from '@angular/core';
import { getContrastTextColor } from '../utils';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() backgroundColor: string = '#000000';
    @Input() title: string = '';
    @Input() disabled = false;

    public textColor: string = '#000000';
    constructor() {}
    ngOnInit() {
        this.textColor = getContrastTextColor(this.backgroundColor);
    }
}

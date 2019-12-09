import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-expand-button',
    templateUrl: './expand-button.component.html',
    styleUrls: ['./expand-button.component.scss'],
})
export class ExpandButtonComponent implements OnInit {
    @Input() color: string = 'gray';
    @Input() title: string = 'EXPAND';
    @Input() icon: string = 'arrow-down';

    constructor() {}

    ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
    @Input() withFooter: Boolean = true;
    @Input() backgroundColor: String = 'rgba(255, 255, 255, 0.8)';
    constructor() {}

    ngOnInit() {}
}

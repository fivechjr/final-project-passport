import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
    @Input() withFooter: boolean = true;
    @Input() withBottomSpacing: boolean = true;
    @Input() backgroundColor: string = 'rgba(255, 255, 255, 0.5)';

    constructor() {}

    ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'section-text',
    templateUrl: './section-text.component.html',
    styleUrls: ['./section-text.component.scss'],
})
export class SectionTextComponent implements OnInit {
    @Input() title: string = 'Section Title';
    @Input() text: string = 'Text';
    constructor() {}

    ngOnInit() {}
}

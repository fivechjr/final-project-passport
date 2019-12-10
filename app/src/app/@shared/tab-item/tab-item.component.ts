import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-item',
    templateUrl: './tab-item.component.html',
    styleUrls: ['./tab-item.component.scss'],
})
export class TabItemComponent implements OnInit {
    @Input() icon: string = 'cog';
    @Input() link: string = '/settings';
    @Input() title: string = 'Settings';

    constructor() {}

    ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    @Input() title: string = 'Page';
    @Input() backgroundColor: string = '#ffffff';

    constructor() {}

    ngOnInit() {}
}

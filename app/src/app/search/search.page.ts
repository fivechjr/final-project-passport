import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements AfterViewInit {
    @ViewChild('search', { static: true }) searchElement;

    constructor(private location: Location) {}

    ngAfterViewInit() {
        this.searchElement.nativeElement.focus();
    }

    goBack() {
        this.location.back();
    }
}

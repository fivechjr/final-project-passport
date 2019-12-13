import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
    @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

    constructor() {}

    ngOnInit() {}

    triggerFileInput() {
        this.fileInput.nativeElement.click();
    }

    fileUpload() {
        console.log(this.fileInput);
        // Access the uploaded file through the ElementRef
        console.log(this.fileInput.nativeElement.files[0]);
    }
}

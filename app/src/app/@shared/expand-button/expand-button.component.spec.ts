import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpandButtonComponent } from './expand-button.component';

describe('ExpandButtonComponent', () => {
    let component: ExpandButtonComponent;
    let fixture: ComponentFixture<ExpandButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExpandButtonComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(ExpandButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

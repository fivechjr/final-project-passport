import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerticalEventCardComponent } from './vertical-event-card.component';

describe('VerticalEventCardComponent', () => {
    let component: VerticalEventCardComponent;
    let fixture: ComponentFixture<VerticalEventCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerticalEventCardComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(VerticalEventCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

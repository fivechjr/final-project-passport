import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorizontalEventCardComponent } from './horizontal-event-card.component';

describe('HorizontalEventCardComponent', () => {
    let component: HorizontalEventCardComponent;
    let fixture: ComponentFixture<HorizontalEventCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HorizontalEventCardComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(HorizontalEventCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

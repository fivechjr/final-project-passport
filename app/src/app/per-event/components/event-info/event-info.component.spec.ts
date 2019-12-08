import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventInfoComponent } from './event-info.component';

describe('EventInfoComponent', () => {
    let component: EventInfoComponent;
    let fixture: ComponentFixture<EventInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventInfoComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(EventInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

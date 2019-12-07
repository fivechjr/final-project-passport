import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerEventPage } from './per-event.page';

describe('PerEventPage', () => {
    let component: PerEventPage;
    let fixture: ComponentFixture<PerEventPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PerEventPage],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(PerEventPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

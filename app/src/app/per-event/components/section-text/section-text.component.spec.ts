import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionTextComponent } from './section-text.component';

describe('SectionTextComponent', () => {
    let component: SectionTextComponent;
    let fixture: ComponentFixture<SectionTextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SectionTextComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(SectionTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

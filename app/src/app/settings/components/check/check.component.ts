import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckComponent),
            multi: true,
        },
    ],
})
export class CheckComponent implements ControlValueAccessor {
    @Input() name: string;
    @Input('value') val: string;

    constructor() {}

    ngOnInit() {}

    onChange: any = () => {};
    onTouched: any = () => {};

    get value() {
        return this.val;
    }

    set value(val) {
        this.val = val;
        this.onChange(val);
        this.onTouched();
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
}

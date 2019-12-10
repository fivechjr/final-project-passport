import {
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('isRight => isLeft', slideTo('left')),
    transition('isLeft => isRight', slideTo('right')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
]);

function slideTo(direction) {
    const optional = { optional: true };
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%',
                }),
            ],
            optional,
        ),
        query(':enter', [style({ [direction]: '-100%' })]),
        group([
            query(
                ':leave',
                [animate('300ms ease', style({ [direction]: '100%' }))],
                optional,
            ),
            query(':enter', [
                animate('300ms ease', style({ [direction]: '0%' })),
            ]),
        ]),
    ];
}

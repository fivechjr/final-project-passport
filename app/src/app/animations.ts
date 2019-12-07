import {
    trigger,
    animate,
    style,
    group,
    animateChild,
    query,
    stagger,
    transition,
} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('isRight => isLeft', slideTo('left')),
    transition('isLeft => isRight', slideTo('right')),
    transition('isRight => isRight', slideTo('right')),
    transition('isLeft => isLeft', slideTo('left')),
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
                [animate('400ms ease', style({ [direction]: '100%' }))],
                optional,
            ),
            query(':enter', [
                animate('400ms ease', style({ [direction]: '0%' })),
            ]),
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}
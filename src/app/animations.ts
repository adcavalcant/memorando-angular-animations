import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({ border: '4px solid #B2B6FF', filter: 'brightness(92%)' })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate('200ms'),
  ]),
]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    // :enter -> quando o elemento entra no dom.
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    // :leave -> quando o elemento sai do dom.
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '300ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);
import {
	trigger,
	transition,
	state,
	style,
	query,
	group,
	animateChild,
	animate
} from '@angular/animations';

const noTransition = trigger("routeAnimations", []);

const fader =
   trigger("routeAnimations", [
		transition('* <=> *', [
			style({
				'min-height': '800px'
			}),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					left: 15,
					top: 15,
					width: '100%',
					opacity: 0,
					transform: 'scale(0) translateY(100%)',
				}),
			]),

			query(':enter', [
				animate(
					'600ms ease',
					style({
						opacity: 1,
						transform: 'scale(1) translateY(0)'
					})
				),
			])
		]),
	]);


const slider = 
  trigger('routeAnimations', [
    transition('* <=> *', [
    		style({
				// 'min-height': '800px'
			}),
			query(':enter, :leave', [
				      style({
				        position: 'absolute',
				        left: 15,
						top: 15
				      })
		    ], { optional: true }),

			query(':enter', [
		      style({ left: '-100%'})
		    ]),

			group([
		      	query(':leave', [
		        	animate('600ms ease-in', style({ left: '100%'}))
		      	], { optional: true }),
		      	query(':enter', [
		        	animate('600ms ease-in', style({ left: '0%'}))
	      		])
	    	]),
    	]),
    // transition('* => isRight', slideTo('right') ),
    // transition('isRight => *', slideTo('left') ),
    // transition('isLeft => *', slideTo('right') )
  ]);

export const routerTransition = fader;

 
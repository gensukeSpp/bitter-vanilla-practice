import { style } from '@vanilla-extract/css';

export const headerAbove = {
	wrapper: style({
		backgroundImage: `url(./img/header_bg.jpg)`
	}),
	belt: style({
		display: 'grid',
		gridTemplateColumns: '1fr'
	}),
	belt__Image: style({
		objectFit: 'contain',
		width: 'inherit'
	}),
	right__List: style({
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column'
	}),
	selectors: {
		'&:> li': {
			fontSize: '0.75em'
		}
	}
}
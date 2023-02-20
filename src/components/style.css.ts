import { style } from '@vanilla-extract/css';

// const bgHeader = './img/header.jpg';
const child = style({
	display: 'inline-block'
});

export const headerAbove = {
	wrapper: style({
		display: 'block',
		// backgroundImage: `url(${bgHeader})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat'
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
		flexDirection: 'column',
		selectors:{
			'& > li': {
				textDecoration: 'underline'
			}
		}
	}),
}

// export const styleList = style({
// 	selectors:{
// 		// :{
// 		// 		border: 'medium'
// 		// },
// 		[`${headerAbove.right__List} li`]:{
// 			textDecoration: 'underline'
// 		}
// 	}
// })
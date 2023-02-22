import { globalStyle, style } from '@vanilla-extract/css';

// const bgImage = "./img/header_bg.jpg";
export const bgWrapper = style({
	// backgroundImage: `url(${bgImage})`,
	display: 'grid',
	gridTemplateColumns: '1fr',
	width: 'inherit'
});

globalStyle(`${bgWrapper} > *`, {
	objectFit: 'cover',
	width: 'inherit',
	gridArea: '1/1'
});

export const ul__Menu = style({
	fontSize: '0.75em',
	textAlign: 'right'
});

// globalStyle(`${ul__Menu} > li::before`, {
// 	content: '""',
// 	backgroundImage: 'url(./img/arrow.gif)'
// });

export const logo__Image = style({
	gridArea: 'initial'
});

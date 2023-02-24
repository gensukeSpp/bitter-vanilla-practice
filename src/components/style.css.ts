import { globalStyle, style } from '@vanilla-extract/css';

// const bgImage = "../../public/img/header_bg.jpg";

export const bgWrapper = style({
	backgroundImage: 'url("~/public/img/header_bg.jpg")',
	display: 'grid',
	gridTemplateColumns: '1fr',
	width: 'inherit'
});

globalStyle(`${bgWrapper} > *`, {
	objectFit: 'cover',
	width: 'inherit',
	height: 'inherit',
	gridArea: '1/1'
});

export const ul__Menu = style({
	fontSize: '0.75em',
	textAlign: 'right'
});

export const li__Menu = style({
	padding: '0 1%',
	selectors: {
		'&::before': {
			content: '""',
			backgroundImage: 'url("~/public/img/arrow.gif")',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			width: '1%',
			height: '60%',
			display: 'inline-block'
		}
	}
});

export const logo__Image = style({
	gridArea: 'initial'
});

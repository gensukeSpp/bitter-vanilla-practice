import { globalStyle, style } from '@vanilla-extract/css';

export const bgWrapper = style({
	// https://stackoverflow.com/questions/57483171/how-can-i-resolve-background-image-url-inside-sass-file-using-webpack-4
	// backgroundImage: 'url("~/public/img/header_bg.jpg")',
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

export const ul__RightMenu = style({
	fontSize: '0.75em',
	textAlign: 'right'
});

export const li__RightMenu = style({
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

export const main__Image = style({
	objectFit: 'contain',
	width: 'inherit'
});

export const bgWrapper__Rows = style({
	gridTemplateRows: '10% 90%'
});

export const ul__MainMenu = style({
	gridRowStart: '2',
	textAlign: 'center',
	height: '50%',
	overflow: 'hidden'
});

export const li__MainMenu = style({
	display: 'inline-block',
	width: '10.5%'
})

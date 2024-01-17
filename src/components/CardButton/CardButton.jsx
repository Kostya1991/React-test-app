import './CardButton.css';

export const CardButton = ({ children, className }) => {
	const classes = 'card-button' + (className ? ' ' + className : '');

	return (
		<button className={classes}>
			{children}
		</button>
	);
};

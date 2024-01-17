import { useState } from 'react';
import './Button.css';

export const Button = () => {
	// let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');

	const clicked = () => {
		setText(text === 'Сохранить' ? 'Удалить' : 'Сохранить');
		console.log('Привет');
	};

	return (
		// <button onClick={() => console.log('Привет')} className="button accent">Сохранить</button>
		<button onClick={clicked} className="button accent">{text}</button>
	);
};

import { useState } from 'react';
import './JournalForm.css';
import { Button } from '../Button/Button';

export const JournalForm = () => {
	const [inputData, setInputData] = useState('');
	// const [state, setState] = useState({
	// 	age: 31
	// });

	const inputChange = e => {
		setInputData(e.target.value);
	};

	const submitForm = e => {
		e.preventDefault();
		// state.age = 40;
		// setState({...state, age: 40});
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='journal-form' onSubmit={submitForm}>
			{/* { state.age } */}
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData}  onChange={inputChange}/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>

			<Button text="Сохранить"/>
		</form>
	);
};

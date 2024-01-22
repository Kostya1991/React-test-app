import './JournalForm.css';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const JournalForm = ({ onSubmit }) => {
	const [formValid, setFormValid] = useState({
		title: true,
		post: true,
		date: true
	});

	const submitForm = e => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;

		if (!formProps.title?.trim().length) {
			setFormValid(state => ({ ...state, title: false }));
			isFormValid = false;
		} else {
			setFormValid(state => ({ ...state, title: true }));
		}

		if (!formProps.post?.trim().length) {
			setFormValid(state => ({ ...state, post: false }));
			isFormValid = false;
		} else {
			setFormValid(state => ({ ...state, post: true }));
		}

		if (!formProps.date) {
			setFormValid(state => ({ ...state, date: false }));
			isFormValid = false;
		} else {
			setFormValid(state => ({ ...state, date: true }));
		}

		if (!isFormValid) {
			return;
		}

		onSubmit(formProps);
	};

	return (
		<form className='journal-form' onSubmit={submitForm}>
			<input type="text" name='title' style={{ border: formValid.title ? undefined : '1px solid red' }}/>
			<input type="date" name='date' style={{ border: formValid.date ? undefined : '1px solid red' }}/>
			<input type="text" name='tag'/>
			<textarea name="post" id="" cols="30" rows="10" style={{ border: formValid.post ? undefined : '1px solid red' }}></textarea>

			<Button text="Сохранить"/>
		</form>
	);
};

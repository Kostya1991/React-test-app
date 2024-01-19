import './JournalForm.css';
import { Button } from '../Button/Button';

export const JournalForm = ({ onSubmit }) => {

	const submitForm = e => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		onSubmit(formProps);
	};

	return (
		<form className='journal-form' onSubmit={submitForm}>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag'/>
			<textarea name="post" id="" cols="30" rows="10"></textarea>

			<Button text="Сохранить"/>
		</form>
	);
};

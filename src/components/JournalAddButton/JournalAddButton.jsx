import { CardButton } from '../CardButton/CardButton';
import './JournalAddButton.css';

export const JournalAddButton = () => {

	return (
		<CardButton className="journal-add">
			<img className='journal-add__icon' src="/add.svg" alt="add" />
      Новое воспоминание
		</CardButton>
	);
};

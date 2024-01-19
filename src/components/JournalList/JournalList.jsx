import './JournalList.css';
import { CardButton } from '../CardButton/CardButton';
import { JournalItem } from '../JournalItem/JournalItem';

export const JournalList = ({ journalItems }) => {
	if (journalItems.length === 0) {
		return <p>Записей пока нет</p>;
	}

	const sortItems = (prev, next) => {
		if (prev.date < next.date) {
			return 1;
		}
		return -1;
	};

	return (
		<>
			{
				journalItems.sort(sortItems).map((journalItem) => (
					<CardButton key={journalItem.key}>
						<JournalItem
							title={journalItem.title}
							text={journalItem.post}
							date={journalItem.date}
						/>
					</CardButton>
				))
			}
		</>
	);
};
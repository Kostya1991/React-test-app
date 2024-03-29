import './JournalItem.css'; 

export const JournalItem = ({title, text, date}) => {
	const formattedDate = new Intl.DateTimeFormat('ru-Ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);

	return(
		<>
			<h2 className="journal-item__header">{title}</h2>
			<div className="journal-item__body">
				<div className="journal-item__date">{formattedDate}</div>
				<p className="journal-item__text">{text}</p>
			</div>
		</>
	);
};

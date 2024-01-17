// import React from 'react';
import './App.css';
import { CardButton } from './components/CardButton/CardButton';
import { JournalItem } from './components/JournalItem/JournalItem';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';
import { Body } from './layouts/Body/Body';
import { Header } from './components/Header/Header';
import { JournalList } from './components/JournalList/JournalList';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae, quae, eveniet nemo vero maiores, quasi maxime ea magnam iste quia pariatur ut molestias veritatis voluptates velit voluptatibus earum fuga. Ad officia laudantium amet sunt quas sit voluptate, minima odit molestiae corrupti, quod cumque veniam reprehenderit veritatis minus excepturi. Illum molestias dolorem animi ducimus exercitationem, omnis repudiandae atque mollitia nihil.',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae, quae, eveniet nemo vero maiores, quasi maxime ea magnam iste quia pariatur ut molestias veritatis voluptates velit voluptatibus earum fuga.',
			date: new Date()
		}
	];

	return (
		<div className='app'>
			<LeftPanel>
				<Header />

				<JournalAddButton />

				<JournalList>
					<CardButton>
						<JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
					</CardButton>
					<CardButton>
						<JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;

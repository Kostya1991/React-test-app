// import React from 'react';
import './App.css';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel';
import { Body } from './layouts/Body/Body';
import { Header } from './components/Header/Header';
import { JournalList } from './components/JournalList/JournalList';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import { useState } from 'react';

function App() {
	const [journalItems, setJournalItems] = useState([]);

	const submitHandler = (formValue) => {
		setJournalItems(prevState => [...prevState, { ...formValue, key: Date.now(), date: new Date(formValue.date) }]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList journalItems={journalItems} />
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={submitHandler} />
			</Body>
		</div>
	);
}

export default App;

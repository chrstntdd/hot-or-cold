import React from 'react';
import './guess-history.css';

export default function GuessHistory(props) {
	const history = props.history.map((number, index) =>
		<li key={index}>
			{number}
		</li>
	);
	return (
		<ul id="guessHistory" className="guessBox">
			{history}
		</ul>
	);
}

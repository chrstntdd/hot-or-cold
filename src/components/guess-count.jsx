import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
	return <p>Guess #<span id="guessCount">{props.guessCount}</span>!</p>;
}

GuessCount.defaultProps = {
	guessCount: 0,
};

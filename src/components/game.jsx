import React from 'react';
import './game.css';

import Header from './header';
import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [],
			feedback: 'Make your guess!',
			magicNumber: Math.ceil(Math.random() * 100),
			disabledInput: false,
		};
	}
	newGame() {
		this.setState({
			history: [],
			feedback: 'Make your guess!',
			magicNumber: Math.ceil(Math.random() * 100),
			disabledInput: false,
		});
	}
	guess(guess) {
		guess = parseInt(guess, 10);
		// CHECK THAT GUESS IS A VALID NUMBER
		if (isNaN(guess)) {
			this.setState({
				feedback: 'Please enter in a valid number.',
			});
			return;
		}
		const difference = Math.abs(guess - this.state.magicNumber);
		let feedback;
		if (difference >= 50) {
			feedback = `Ice cold baby, you're ice cold`;
		} else if (difference >= 30) {
			feedback = `You're just below freezing`;
		} else if (difference >= 10) {
			feedback = `You're lukewarm at best.`;
		} else if (difference >= 1) {
			feedback = `You're on fire!`;
		} else {
			feedback = `WINNER WINNER CHICKEN DINNER`;
			this.setState({
				disabledInput: true,
			});
		}
		this.setState({
			feedback,
			history: [ ...this.state.history, guess ],
		});
	}
	render() {
		return (
			<section id="game">
				<Header onNewGame={() => this.newGame()} />
				<Feedback feedback={this.state.feedback} />
				<GuessForm onGuess={(guess) => this.guess(guess)} disabledInput={this.state.disabledInput} />
				<GuessCount guessCount={this.state.history.length} />
				<GuessHistory history={this.state.history} />
			</section>
		);
	}
}

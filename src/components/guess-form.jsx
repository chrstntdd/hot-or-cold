import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
	onGuess(e) {
		e.preventDefault();
		if (this.props.onGuess) {
			const guess = this.input.value.trim();
			this.props.onGuess(guess);
			console.log(guess);
		}
		this.input.value = '';
	}

	render() {
		return (
			<form onSubmit={(e) => this.onGuess(e)}>
				<input
					autoComplete="off"
					type="number"
					ref={(input) => (this.input = input)}
					id="userGuess"
					name="userGuess"
					placeholder="Enter your Guess"
					autoFocus
					min={0}
					max={100}
					disabled={this.props.disabledInput}
					required
				/>
				<button type="submit" name="submit" id="guessButton" disabled={this.props.disabledInput}>Guess</button>
			</form>
		);
	}
}

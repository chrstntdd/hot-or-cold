import React from 'react';
import './top-nav.css';

export default class TopNav extends React.Component {
	onNewGame(e) {
		e.preventDefault();
		if (this.props.onNewGame) {
			this.props.onNewGame();
		}
	}

	onInfo(e) {
		e.preventDefault();
		if (this.props.onInfo) {
			this.props.onInfo();
		}
	}
	render() {
		return (
			<nav>
				<ul>
					<li>
						<a className="what" href="" onClick={(e) => this.onInfo(e)}>
							What?
						</a>
					</li>
					<li>
						<a className="new" href="#" onClick={(e) => this.onNewGame(e)}>
							New Game
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

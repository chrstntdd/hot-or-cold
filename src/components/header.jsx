import React from 'react';
import './header.css';
import InfoModal from './info-modal';
import TopNav from './top-nav';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showInfoModal: false,
		};
	}

	toggleInfoModal() {
		this.setState({
			showInfoModal: !this.state.showInfoModal,
		});
	}

	render() {
		let infoModal;
		if (this.state.showInfoModal) {
			infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
		}

		return (
			<header>
				<TopNav onInfo={() => this.toggleInfoModal()} onNewGame={this.props.onNewGame} />
				{infoModal}
				<h1> Hot or Cold </h1>
			</header>
		);
	}
}

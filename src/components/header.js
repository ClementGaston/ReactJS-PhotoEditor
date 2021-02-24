import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.css';

export default function Header({ image, isSidebarOpen, changeSidebarState }) {
	return (
		<header>
			{image && (
				<div
					id='BurgerMenuContainer'
					className={isSidebarOpen ? 'open' : ''}
					onClick={() => changeSidebarState()}
				>
					<div id='BurgerMenu' />
				</div>
			)}
			<h1>
				<span>Clément GASTON - </span>Photo Editor
			</h1>
		</header>
	);
}

Header.propTypes = {
	image: PropTypes.object,
	isSidebarOpen: PropTypes.bool,
	changeSidebarState: PropTypes.func
};

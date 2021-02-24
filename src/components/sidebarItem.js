import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarItem({ name, icon, active, handleClick }) {
	return (
		<button
			className={`sidebar-item ${active ? 'active' : ''}`}
			onClick={handleClick}
		>
			<img src={icon} alt={name} />
			<span>{name}</span>
		</button>
	);
}

SidebarItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	active: PropTypes.bool,
	handleClick: PropTypes.func
};

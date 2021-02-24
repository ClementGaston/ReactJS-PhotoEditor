import React from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './sidebarItem';

export default function Sidebar({ options, currentIndex, setIndex }) {
	return (
		<div className='sidebar'>
			{options.map((option, index) => (
				<SidebarItem
					key={index}
					name={option.name}
					icon={option.icon}
					active={index === currentIndex}
					handleClick={() => setIndex(index)}
				/>
			))}
		</div>
	);
}

Sidebar.propTypes = {
	options: PropTypes.array,
	currentIndex: PropTypes.number,
	setIndex: PropTypes.func
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Slider({ min, max, value, handleChange }) {
	return (
		<div className='slider-container'>
			<input
				type='range'
				className='slider'
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}

Slider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number,
	handleChange: PropTypes.func
};

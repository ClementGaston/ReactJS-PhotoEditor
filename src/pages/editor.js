import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useWindowsSize from '../hooks/useWindowSize';
import Sidebar from '../components/siderbar';
import Slider from '../components/slider';
import RightClickMenu from '../components/rightClickMenu';
import DEFAULT_OPTIONS from '../data/options';
import '../styles/editor.css';

function Editor({ image, closeSidebar, resetImage }) {
	const windowSize = useWindowsSize();
	const [options, setOptions] = useState(DEFAULT_OPTIONS);
	const [selectedOptionIndex, setSelectedOptionsIndex] = useState(0);
	const selectedOption = options[selectedOptionIndex];
	const canvasRef = useRef();

	function changeSelectedOptions(index) {
		setSelectedOptionsIndex(index);
		closeSidebar();
	}

	// On change - Update options value (Brightness, contrast... )
	function handleSliderChange({ target }) {
		setOptions(prevOptions => {
			return prevOptions.map((option, index) => {
				if (index !== selectedOptionIndex) return option;
				return { ...option, value: parseInt(target.value) };
			});
		});
	}

	useEffect(() => {
		// Image
		function updatePicture() {
			let canvas = canvasRef.current;
			let context = canvas.getContext('2d');

			//context.clearRect(0, 0, canvas.width, canvas.height);
			let height, width, x, y, ratio;
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;

			switch (true) {
				// If image is smaller than the canvas
				case image.naturalHeight < canvas.clientHeight &&
					image.naturalWidth < canvas.clientWidth:
					width = image.naturalWidth;
					height = image.naturalHeight;
					x = (canvas.width - width) / 2;
					y = (canvas.height - height) / 2;
					break;

				// If the image is larger than heighter
				case canvas.clientHeight / image.naturalHeight >
					canvas.clientWidth / image.naturalWidth:
					ratio = canvas.clientWidth / image.naturalWidth;
					width = image.naturalWidth * ratio;
					height = image.naturalHeight * ratio;
					x = (canvas.width - width) / 2;
					y = (canvas.height - height) / 2;
					break;

				// Else
				default:
					ratio = canvas.clientHeight / image.naturalHeight;
					width = image.naturalWidth * ratio;
					height = image.naturalHeight * ratio;
					x = (canvas.width - width) / 2;
					y = (canvas.height - height) / 2;
					break;
			}

			// Update context filter with a mapping in correct formet of the options
			context.filter = options
				.map(option => {
					return `${option.property}(${option.value}${option.unit})`;
				})
				.join(' ');

			//context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
			context.drawImage(image, x, y, width, height);
		}
		updatePicture();
	}, [options, windowSize]);

	return (
		<div id='Editor'>
			<RightClickMenu canvas={canvasRef} reset={resetImage}/>
			<div id='ImageContainer'>
				<canvas ref={canvasRef} id='ImageViewer' />
			</div>

			<Sidebar
				options={options}
				currentIndex={selectedOptionIndex}
				setIndex={changeSelectedOptions}
			/>

			<Slider
				min={selectedOption.range.min}
				max={selectedOption.range.max}
				value={selectedOption.value}
				handleChange={handleSliderChange}
			/>
		</div>
	);
}

export default Editor;

Editor.propTypes = {
	closeSidebar: PropTypes.func,
	image: PropTypes.object,
	resetImage: PropTypes.func
};

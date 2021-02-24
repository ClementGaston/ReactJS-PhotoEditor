import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DropFile from '../components/dropFile';
import '../styles/upload.css';

function Upload({ setImage }) {
	const dropaea = useRef();

	function setPicture(picture) {
		let type = picture.type;

		if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
			dropaea.current.classList.remove('invalid');
			let newImage = new Image();

			newImage.onload = () => {
				setImage(newImage);
			};
			newImage.src = URL.createObjectURL(picture);
		} else {
			dropaea.current.classList.add('invalid');
			return false;
		}
	}

	return (
		<div id='ImageUploadContainer'>
			<DropFile dropRef={dropaea} setPicture={setPicture} />
		</div>
	);
}

export default Upload;

Upload.propTypes = {
	setImage: PropTypes.func
};

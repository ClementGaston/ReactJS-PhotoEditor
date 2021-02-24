import React from 'react';
import PropTypes from 'prop-types';

function DropFile({ setPicture, dropRef }) {
	function onDragHover(e) {
		dropRef.current.classList.add('hover');
		e.preventDefault();
	}

	function onDragLeave(e) {
		dropRef.current.classList.remove('hover');
		e.preventDefault();
	}

	return (
		<>
			<div
				ref={dropRef}
				id='DropZone'
				onDragOver={onDragHover}
				onDragLeave={onDragLeave}
				onDrop={e => {
					e.preventDefault();
					setPicture(e.dataTransfer.files[0]);
				}}
			>
				<span>
					<label htmlFor='InputImage'>Choose a file</label> or drag it here
				</span>
				<input
					id='InputImage'
					type='file'
					onDragOver={onDragHover}
					onDragLeave={onDragLeave}
					onChange={e => {
						e.preventDefault();
						setPicture(e.target.files[0]);
					}}
				/>
			</div>
		</>
	);
}

export default DropFile;

DropFile.propTypes = {
	dropRef: PropTypes.object,
	setPicture: PropTypes.func
};

import brightness from '../icons/brightness.svg';
import contrast from '../icons/contrast.svg';
import saturation from '../icons/saturation.svg';
import grayscale from '../icons/grayscale.svg';
import hueRotate from '../icons/hue_rotate.svg';
import blur from '../icons/blur.svg';

const constPhotoEditor = [
	{
		name: 'Brightness',
		icon: brightness,
		property: 'brightness',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Contrast',
		icon: contrast,
		property: 'contrast',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Saturation',
		icon: saturation,
		property: 'saturate',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Grayscale',
		icon: grayscale,
		property: 'grayscale',
		value: 0,
		range: {
			min: 0,
			max: 100
		},
		unit: '%'
	},
	{
		name: 'Hue Rotate',
		icon: hueRotate,
		property: 'hue-rotate',
		value: 0,
		range: {
			min: 0,
			max: 360
		},
		unit: 'deg'
	},
	{
		name: 'Blur',
		icon: blur,
		property: 'blur',
		value: 0,
		range: {
			min: 0,
			max: 10
		},
		unit: 'px'
	}
];

export default constPhotoEditor;

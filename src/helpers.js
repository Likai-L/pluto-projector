import * as blurhash from 'blurhash';
import { createCanvas, loadImage } from 'canvas';
export const getImageData = (image) => {
	const canvas = createCanvas(image.width, image.height);
	const context = canvas.getContext('2d');
	context.drawImage(image, 0, 0);
	return context.getImageData(0, 0, image.width, image.height);
};

export const encodeImageToBlurhash = async (imageUrl) => {
	const image = await loadImage(imageUrl);
	const imageData = getImageData(image);
	return blurhash.encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

const getImage = (images, type) => images.find((image) => image.type === type).url;

export default getImage;

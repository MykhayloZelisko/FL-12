const showShape = (shape) => {
  const imageShape = document.createElement('img');
  imageShape.setAttribute('src', `./src/img/${shape}.jpg`);
  imageShape.setAttribute('class', 'images');
  return imageShape;
};

export default showShape;
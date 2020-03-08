const showRandomShape = () => {
    const shapes = ['rock', 'paper', 'scissors'];
    return shapes[Math.floor(Math.random() * shapes.length)];
};

export default showRandomShape;
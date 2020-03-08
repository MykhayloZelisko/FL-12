const showFinalResult = (winCount, looseCount) => {
    if (winCount > looseCount) {
        return `Congratulations you've WON! Your score: ${winCount}:${looseCount}`
    } else if (winCount < looseCount) {
        return `Sorry, you've LOST! Your score: ${winCount}:${looseCount}`
    } else {
        return `It is a DRAW! Your score: ${winCount}:${looseCount}`
    }
};

export default showFinalResult;
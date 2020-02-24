function Card(rank, suit) {
    this.rank = rank;
    const _suit = suit;
    const _rankList = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const _isFaceCard = !!(this.rank === 1 || this.rank > 10)
    Object.defineProperty(this, 'isFaseCard', {
        get: function() {
            return _isFaceCard
        }
    });
    
    this.toString = function() {
        return `${_rankList[this.rank - 1]} of ${_suit}`
    }
}

Card.Compare = function(cardOne, cardTwo) {
    if (cardOne.rank > cardTwo.rank) {
        return 1
    } else if (cardOne.rank > cardTwo.rank) {
        return -1
    } else {
        return 0
    }
}

function Deck() {
    const _cards = (function() {
        const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        let cards = [];

        for (let i = 1; i <= 13; i++) {
            for (let j = 0; j <= 3; j++) {
                cards.push(new Card(i, suit[j]));
            }
        }

        return cards;
    })();
    let _count = _cards.length;

    Object.defineProperty(this, 'count', {
        get: function() {
            return _count
        }
    });

    this.drawn = function(n) {
        _count -= n;
        return _cards.splice(_cards.length - n, n);
    }

    this.shuffle = function() {
        let tempCard;
        let tempIndex;
        for (let i = 0; i < this.count; i++) {
           tempIndex = Math.floor(Math.random() * (this.count + 1));
           tempCard = _cards[tempIndex];
           _cards[tempIndex] = _cards[i];
           _cards[i] = tempCard;
        }
    }
}

function Player(name) {
    this.name = name;
    this.deck = null;
    let _wins = 0
    Object.defineProperty(this, 'wins', {
        get: function() {
            return _wins
        }
    });

    this.addWin = function() {
        ++_wins
    }
}

Player.Play = function(playerOne, playerTwo) {
    playerOne.deck = new Deck();
    playerTwo.deck = new Deck();

    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();

    while (playerOne.deck.count > 0) {
        let cardOne = playerOne.deck.drawn(1);
        let cardTwo = playerTwo.deck.drawn(1);
        let result = Card.Compare(cardOne[0], cardTwo[0]);

        console.log(`${cardOne[0].toString()} vs ${cardTwo[0].toString()}`);
        console.log(result);

        if (result === 1) {
            playerOne.addWin()
        } else if (result === -1) {
            playerTwo.addWin()
        }
    }

    if (playerOne.wins > playerTwo.wins) {
        console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`)
    } else if (playerOne.wins < playerTwo.wins) {
        console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`)
    } else {
        console.log(`A drow ${playerOne.wins} to ${playerTwo.wins}`)
    }
}

const playerOne = new Player('Jack', new Deck());
const playerTwo = new Player('Paul', new Deck());

Player.Play(playerOne, playerTwo);
function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    const rankList = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    Object.defineProperty(this, 'isFaseCard', {
        value: !!(this.rank === 1 || this.rank > 10),
        writable: false
    });
    
    this.toString = function() {
        return `${rankList[this.rank - 1]} of ${this.suit}`
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
    const cards = (function() {
        const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
        let cards = [];

        for (let i = 1; i <= 13; i++) {
            for (let j = 0; j <= 3; j++) {
                cards.push(new Card(i, suit[j]));
            }
        }

        return cards;
    })();

    Object.defineProperty(this, 'count', {
        value: cards.length,
        writable: false
    });

    this.drawn = function(n) {
        Object.defineProperty(this, 'count', {
            writable: true,
            value: this.count - n,
            writable: false
        });
        return cards.splice(cards.length - n, n);
    }

    this.shuffle = function() {
        let tempCard;
        let tempIndex;
        for (let i = 0; i < this.count; i++) {
           tempIndex = Math.floor(Math.random() * (this.count + 1));
           tempCard = cards[tempIndex];
           cards[tempIndex] = cards[i];
           cards[i] = tempCard;
        }
    }
}

function Player(name, deck) {
    this.name = name;
    this.deck = deck;
    Object.defineProperty(this, 'wins', {
        value: 0,
        writable: false
    });

    this.addWin = function() {
        Object.defineProperty(this, 'wins', {
            writable: true,
            value: this.wins + 1,
            writable: false
        });
    }
}

Player.Play = function(playerOne, playerTwo) {
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();

    while (playerOne.deck.count > 0) {
        let cardOne = playerOne.deck.drawn(1);
        let cardTwo = playerTwo.deck.drawn(1);
        let result = Card.Compare(cardOne[0], cardTwo[0]);

        console.log(`${cardOne[0].toString()} vs ${cardTwo[0].toString()}`);

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
const _suit = Symbol('suit');
const _rankList = Symbol('ranklist');

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this[_suit] = suit;
        this[_rankList] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    }

    get isFaceCard() {
        return !!(this.rank === 1 || this.rank > 10);
    }

    toString() {
        return `${this[_rankList][this.rank - 1]} of ${this[_suit]}`
    }

    static Compare(cardOne, cardTwo) {
        if (cardOne.rank > cardTwo.rank) {
            return 1
        } else if (cardOne.rank < cardTwo.rank) {
            return -1
        } else {
            return 0
        }
    }
}

const _cards = Symbol('cards');
const _count = Symbol('count');

class Deck {
    constructor() {
        this[_cards] = (function() {
            const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
            let cards = [];
    
            for (let i = 1; i <= 13; i++) {
                for (let j = 0; j <= 3; j++) {
                    cards.push(new Card(i, suit[j]));
                }
            }
    
            return cards;
        })();
        this[_count] = this[_cards].length;
    }

    get count() {
        return this[_count]
    }

    drawn(n) {
        this[_count] -= n;
        return this[_cards].splice(this[_cards].length - n, n);
    }

    shuffle() {
        let tempCard;
        let tempIndex;
        for (let i = 0; i < this[_count]; i++) {
            tempIndex = Math.floor(Math.random() * this.count);
            tempCard = this[_cards][tempIndex];
            this[_cards][tempIndex] = this[_cards][i];
            this[_cards][i] = tempCard;
        }
    }
}

const _wins = Symbol('wins');

class Player {
    constructor(name) {
        this.name = name;
        this.deck = null;
        this[_wins] = 0;
    }

    get wins() {
        return this[_wins];
    }

    addWin() {
        ++this[_wins];
    }

    static Play(playerOne, playerTwo) {
        playerOne.deck = new Deck();
        playerTwo.deck = new Deck();
    
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
}

const playerOne = new Player('Jack');
const playerTwo = new Player('Paul');

Player.Play(playerOne, playerTwo);
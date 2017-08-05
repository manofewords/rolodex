var CardsCollection = require('../src/collections/cards');

describe('CardsCollection', function() {
    it('should sort its entries, by first name, then last name', function() {
        var cards = new CardsCollection();

        cards.add({
            firstName: 'B',
            lastName: 'C'
        });

        cards.add({
            firstName: 'A',
            lastName: 'A'
        });
        expect(cards.at(0).get('firstName')).toEqual('A'); // "A A" has been "inserted" before "B C"

        cards.add({
            firstName: 'B',
            lastName: 'B'
        });
        expect(cards.at(1).get('lastName')).toEqual('B'); // "B B" has been "inserted" after "A A" but before "B C"

        cards.add({
            firstName: 'a',
            lastName: 'a'
        });
        expect(cards.at(1).get('lastName')).toEqual('a'); // sorting is case insensitive: "a a" is after "A A", but before "B B"
    });
});
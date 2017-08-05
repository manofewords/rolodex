var CardModel = require('../src/models/card');

describe('CardModel', function() {
    it('should be valid if non-empty first and last names are provided', function() {
        var card = new CardModel();

        card.set({
            firstName: 'firstName',
            lastName: 'lastName'
        }, {
            validate: true
        });

        expect(card.validationError).toEqual(null);
    });

    it('should be invalid if an empty first name is provided', function() {
        var card = new CardModel();

        card.set({
            firstName: '',
            lastName: 'lastName'
        }, {
            validate: true
        });

        expect(card.validationError).toEqual('firstName cannot be empty');
    });

    it('should be invalid if an empty last name is provided', function() {
        var card = new CardModel();

        card.set({
            firstName: 'firstName',
            lastName: ''
        }, {
            validate: true
        });

        expect(card.validationError).toEqual('lastName cannot be empty');
    });
});
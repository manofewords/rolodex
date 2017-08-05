var Backbone = require('backbone');
var Card = require('../models/card');
  
var CardsCollection = Backbone.Collection.extend({
    url: '/cards',
    model: Card,
    comparator: function(card1, card2) {
        var firstName1, lastName1, firstName2, lastName2;

        firstName1 = card1.get('firstName').toLowerCase();
        lastName1 = card1.get('lastName').toLowerCase();
        firstName2 = card2.get('firstName').toLowerCase();
        lastName2 = card2.get('lastName').toLowerCase();

        if(firstName1 < firstName2) {
            return -1;
        } else if(firstName1 === firstName2) {
            if(lastName1 <= lastName2) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }
});

module.exports = CardsCollection;

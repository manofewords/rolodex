var Backbone = require('backbone');
var Mustache = require('mustache');

require('../css/cards.css');

var CardsTemplate = require('../templates/cards.html');
var CardTemplate = require('../templates/card.html');

var Cards = Backbone.View.extend({
    el: '.cards',

    initialize: function() {
        this.fetchCards();

        this.collection.on('sync', this.render.bind(this));
    },

    fetchCards: function() {
        this.collection.fetch({
            success: this.render.bind(this),
            error: this.errorHandler
        });
    },

    render: function() {
        this.$el.html(Mustache.render(CardsTemplate, {
            cards: this.collection.map(function(card) {
                return {
                    firstName: card.get('firstName'),
                    lastName: card.get('lastName')
                };
            })
        }, {
            card: CardTemplate
        }));

        return this;
    },

    errorHandler: function() {
        alert('An error has occurred.');
    }
});

module.exports = Cards;

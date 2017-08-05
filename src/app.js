var Backbone = require('backbone');

var CardsCollection = require('./collections/cards');
var NewCard = require('./views/newCard');

var App = Backbone.View.extend({
    el: '.app',

    collection: new CardsCollection(),

    initialize: function() {
        new NewCard({
            collection: this.collection
        });
    }
});

var app = new App();

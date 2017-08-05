var Backbone = require('backbone');

require('reset-css/reset.css');
require('./css/app.css');

var CardsCollection = require('./collections/cards');
var Cards = require('./views/cards');
var NewCard = require('./views/newCard');

var App = Backbone.View.extend({
    el: '.app',

    collection: new CardsCollection(),

    initialize: function() {
        new Cards({
            collection: this.collection
        });
        new NewCard({
            collection: this.collection
        });
    }
});

var app = new App();

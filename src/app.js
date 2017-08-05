var Backbone = require('backbone');

var CardsCollection = require('./collections/cards');

var App = Backbone.View.extend({
    el: '.app',

    collection: new CardsCollection()
});

var app = new App();

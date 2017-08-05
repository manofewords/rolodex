var Backbone = require('backbone');
var Mustache = require('mustache');

require('../css/newCard.css')

var NewCardTemplate = require('../templates/newCard.html');

var NewCard = Backbone.View.extend({
    el: '.newCard',

    events: {
        'submit form': 'saveCard'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(Mustache.render(NewCardTemplate));

        return this;
    },

    saveCard: function(event) {
        event.preventDefault();

        this.collection.create({
            firstName: this.$el.find('form .firstName').val(),
            lastName: this.$el.find('form .lastName').val()
        }, {
            success: this.resetForm.bind(this),
            error: this.errorHandler
        });
    },

    resetForm: function() {
        this.$el.find('form')[0].reset();
        this.$el.find('form .firstName').focus();
    },

    errorHandler: function() {
        alert('An error has occurred.');
    }
});

module.exports = NewCard;

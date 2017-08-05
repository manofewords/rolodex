var Backbone = require('backbone');

var Card = Backbone.Model.extend({
    defaults: {
        firstName: null,
        lastName: null
    },

    validate: function(attributes) {
        if(!attributes.firstName) {
            return 'firstName cannot be empty';
        }

        if(!attributes.lastName) {
            return 'lastName cannot be empty';
        }
    }
});

module.exports = Card;

# Squirro home assignment

## Requirements

> Using the backbone.js framework create a small address book as demonstrated in [this screencast](http://screencast.com/t/KTQdrib6X)
> 
> Note that:
> - No persistence to the server is required
> - The contact list should be sorted by name
> 
> Some tips that might be useful. It's a good idea to show off your general frontend knowhow e.g. unit testing, build system etc. and in general make the example look as much like "code you'd put in production" as possible. It's OK to use additional libraries if that makes sense and feel free to "show off" if you want to make the task more interesting, but recommend not using more than 4 hours on it.

## Tasks

- smallest backend possible
- build system
- unit tests
- Backbone views & models
- minimal styling

## Notes on the implementation

Run `npm install` then `npm run build` and `node server.js`, and go to [http://localhost:3000/](http://localhost:3000/)

I've chosen to use:
- Webpack for the builder/bundler because I think it's the most common ones nowadays.
- Mustache for HTML templating because that's what I've been using most recently. The 2 things I needed were partials and loops. Any other templating library with these features would have done it.
- PostCSS with PreCSS for the CSS processing, to be able to use Sass-style variables.

I've realized _after_ implementing it, that my address book entry form has the 2 fields "first name" and "last name", instead of the required "name" and "city". I kept my implementation however, because it actually [makes the sorting a little trickier](https://github.com/manofewords/rolodex/commit/18fff9de2d0473a83a03fcaae3b01c889c712baf), and therefore the unit tests more interesting.

Naming is hard. I've chosen to name an address book entry a "card" (mostly because mac OS' Contacts app uses "Cards", "vCards" and `.vcf` files). 

## Possible improvements

- better color names :)
- run the unit tests on file watch
- have a better test report
- better error handling, e.g. display validation errors on the form field, and not using an `alert()`
- minification and sourcemaps
- `index.html` not in `/dist` folder, but copied over on build
- fix the relative `require` paths

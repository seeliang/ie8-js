ie8-js
====
ie8 js fix for foundation framework and common ie8 css issues 

based on
http://foundation.zurb.com/forum/posts/241-foundation-5-and-ie8

# Includes
* [REM.js](https://github.com/chuckcarpenter/REM-unit-polyfill)
* [nwmatcher](https://github.com/dperini/nwmatcher)
* [selectivizr](https://github.com/keithclark/selectivizr)
* ie8-js-html5shiv.js with [html5shiv](https://github.com/afarkas/html5shiv)

# How to use
* ie8-js.js is the main file 
* use ie8-js-html5shiv.js if you are not using [modernizr](https://github.com/Modernizr/Modernizr)
* there is compile conflict of [selectivizr](https://github.com/keithclark/selectivizr) and [respond](https://github.com/scottjehl/Respond)  **See Limitation**, so you will need [respond](https://github.com/scottjehl/Respond) if you have responsive css3 code

See [sample.html](https://github.com/seeliang/ie8-js/blob/master/sample.html), **if lt ie 9** section

# Install
npm install ie8-js

# Limitation 
* there is a conflict of compile seletivizr.js and respond.js with webpack in one file
* it's for ie8 only, ie8 compatibility mode will NOT work

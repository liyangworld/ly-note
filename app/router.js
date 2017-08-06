'use strict';

module.exports = app => {

    app.redirect('/', '/html/index',302);

    app.get('/html/index', 'html.index');

};

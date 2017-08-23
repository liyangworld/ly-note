'use strict';

module.exports = app => {

    app.redirect('/', '/draft/index',302);

    app.get('/draft/index', 'draft.index');

    app.get('/html/index', 'html.index');

    app.get('/css/index', 'css.index');
    app.get('/javascript/index', 'javascript.index');
    app.get('/javascript/versions', 'javascript.versions');


    app.get('/jquery/index', 'jquery.index');
    app.get('/bootstrap/index', 'bootstrap.index');
    app.get('/vue/index', 'vue.index');
    app.get('/element/index', 'element.index');

    app.get('/react/index', 'react.index');
    app.get('/react/quickStart', 'react.quickStart');
    app.get('/react/eventHandle', 'react.eventHandle');

    app.get('/react/componentEvolutionJs', 'react.componentEvolutionJs');

    app.get('/reactNative/index', 'reactNative.index');
    app.get('/node/index', 'node.index');
    app.get('/egg/index', 'egg.index');

};

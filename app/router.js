'use strict';

module.exports = app => {

    app.redirect('/', '/draft/index',302);

    app.get('/draft/index', 'draft.index');

    app.get('/html/index', 'html.index');

    app.get('/css/index', 'css.index');

    app.get('/javascript/index', 'javascript.index');
    app.get('/javascript/versions', 'javascript.versions');
    app.get('/javascript/grammar', 'javascript.grammar');
    app.get('/javascript/dataTypes', 'javascript.dataTypes');
    app.get('/javascript/operator', 'javascript.operator');
    app.get('/javascript/objDescription', 'javascript.objDescription');
    app.get('/javascript/arrDescription', 'javascript.arrDescription');
    app.get('/javascript/fnDescription', 'javascript.fnDescription');

    app.get('/javascript/Object', 'javascript.Object');
    app.get('/javascript/Array', 'javascript.Array');
    app.get('/javascript/String', 'javascript.String');
    app.get('/javascript/Number', 'javascript.Number');
    app.get('/javascript/Boolean', 'javascript.Boolean');
    app.get('/javascript/RegExp', 'javascript.RegExp');
    app.get('/javascript/Math', 'javascript.Math');
    app.get('/javascript/Date', 'javascript.Date');
    app.get('/javascript/JSON', 'javascript.JSON');
    app.get('/javascript/Error', 'javascript.Error');
    app.get('/javascript/console', 'javascript.console');
    app.get('/javascript/Globals', 'javascript.Globals');
    app.get('/javascript/Promise', 'javascript.Promise');

    app.get('/javascript/NewThis', 'javascript.NewThis');
    app.get('/javascript/Prototype', 'javascript.Prototype');
    app.get('/javascript/Module', 'javascript.Module');


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


var makeController = require('./utils/makeController');

const routes = {
    draft:['index'],
    html:['index'],
    css:['index'],
    jquery:['index'],
    bootstrap:['index'],
    vue:['index'],
    element:['index'],
    reactNative:['index'],
    node:['index','quickStart','packageJson','module','npmPublish','useful','commander','fs','querystring','global','process','child_process','Buffer','url','dns','http','https','path','copyFile','iterateDir',
        'createServer','sendRequest',
        'massage','guardProcess'
    ],
    fe:['index',
        'moduleHistory','requireJs','seaJs','es6Module',
        'quickStart'
    ],

    javascript:[
        'index','versions',
        'grammar','dataTypes','operator','objDescription','arrDescription','fnDescription',
        'Object','Array','String','Number','Boolean','RegExp','Math','Date','JSON','Error','console','Globals','Promise',
        'NewThis','Prototype',
        'BomPageRender','BomWindow','BomLocation','BomScreen','BomXHR','BomFetch','BomCORS','BomWebSocket','BomStorage',
        'DomAbstract','DomDocument','DomElement','DomStyle','DomEvent','DomEventType'
    ],
    react:[
        'index','quickStart','eventHandle','componentEvolutionJs'
    ],
    os:['index','winHotKey','winCli','lixHotKey','lixCli','lixFs','lixFlow','lixReg'],
    express:['index'],
    koa:['index'],
    egg:['index'],
    python:['index',
        'grammar','dataType','operator','number','string'
    ]
};

module.exports = app => {

    app.redirect('/', '/draft/index',302);

    makeController.makeRoutes(app,routes);

};

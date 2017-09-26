

const routes = {
    draft:['index'],
    html:['index'],
    css:['index'],
    jquery:['index'],
    bootstrap:['index'],
    vue:['index'],
    element:['index'],
    reactNative:['index'],
    node:['index'],
    egg:['index'],
    javascript:[
        'index','versions',
        'grammar','dataTypes','operator','objDescription','arrDescription','fnDescription',
        'Object','Array','String','Number','Boolean','RegExp','Math','Date','JSON','Error','console','Globals','Promise',
        'NewThis','Prototype','Module',
        'BomPageRender','BomWindow','BomLocation','BomScreen','BomXHR','BomFetch','BomCORS','BomWebSocket','BomStorage',
        'DomAbstract','DomDocument','DomElement','DomStyle','DomEvent','DomEventType'
    ],
    react:[
        'index','quickStart','eventHandle','componentEvolutionJs'
    ]
};

function getRoutes(app,routes) {
    for(let key in routes){
        routes[key].forEach((route)=>{
            app.get(`/${key}/${route}`, `${key}.${route}`);
        });
    }
}


module.exports = app => {

    app.redirect('/', '/draft/index',302);

    getRoutes(app,routes);

};

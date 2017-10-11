/**
 * Created by liyang on 2017-10-11.
 */

function makeRoutes(app,routes) {
    for(let key in routes){
        routes[key].forEach((route)=>{
            app.get(`/${key}/${route}`, `${key}.${route}`);
        });
    }
}

function makeActions(controller,viewDir,actions) {
    actions.forEach(({name,hasAction,dir})=>{
        let path = `pages/${viewDir}/${dir}` + (dir?'/':'') + name +'.html';
        controller.prototype[name] = function* () {
            yield this.ctx.render(path,{action:hasAction});
        }
    });
}

module.exports = {makeRoutes,makeActions};
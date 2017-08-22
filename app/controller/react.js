'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class ReactController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/react/index.html');
        }
        * quickStart(){
            yield this.ctx.render('pages/react/quickStart.html',{action:'quickStart'});
        }
        * eventHandle(){
            yield this.ctx.render('pages/react/eventHandle.html',{action:'eventHandle'});
        }
        * componentEvolutionJs(){
            yield this.ctx.render('pages/react/componentEvolutionJs.html',{action:'componentEvolutionJs'});
        }
    }
    return ReactController;
};
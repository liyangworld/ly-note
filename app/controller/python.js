'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class pythonController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/python/index.html');
        }
        * grammar(){
            yield this.ctx.render('pages/python/grammar/grammar.html',{action:'grammar'});
        }
    }
    return pythonController;
};
'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class JavascriptController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/javascript/index.html');
        }
        * versions(){
            yield this.ctx.render('pages/javascript/versions.html',{action:'versions'});
        }
        * grammar(){
            yield this.ctx.render('pages/javascript/grammar.html',{action:'grammar'});
        }
        * dataTypes(){
            yield this.ctx.render('pages/javascript/dataTypes.html',{action:'dataTypes'});
        }
        * operator(){
            yield this.ctx.render('pages/javascript/operator.html',{action:'operator'});
        }
    }
    return JavascriptController;
};
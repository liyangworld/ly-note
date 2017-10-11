'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class FeController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/fe/index.html');
        }

        * moduleHistory(){
            yield this.ctx.render('pages/fe/module/moduleHistory.html',{action:'moduleHistory'});
        }
        * requireJs(){
            yield this.ctx.render('pages/fe/module/requireJs.html',{action:'requireJs'});
        }
        * seaJs(){
            yield this.ctx.render('pages/fe/module/seaJs.html',{action:'seaJs'});
        }
        * es6Module(){
            yield this.ctx.render('pages/fe/module/es6Module.html',{action:'es6Module'});
        }

        * quickStart(){
            yield this.ctx.render('pages/fe/webpack/quickStart.html',{action:'quickStart'});
        }

    }
    return FeController;
};
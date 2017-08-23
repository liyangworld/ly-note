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
    }
    return JavascriptController;
};
'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class KoaController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/koa/index.html');
        }
    }
    return KoaController;
};
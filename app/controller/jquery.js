'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class JQueryController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/jQuery/index.html');
        }
    }
    return JQueryController;
};
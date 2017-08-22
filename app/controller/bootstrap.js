'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class BootstrapController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/bootstrap/index.html');
        }
    }
    return BootstrapController;
};
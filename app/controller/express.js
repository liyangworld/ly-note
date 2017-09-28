'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class ExpressController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/express/index.html');
        }
    }
    return ExpressController;
};
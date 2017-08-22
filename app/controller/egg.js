'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class EggController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/egg/index.html');
        }
    }
    return EggController;
};
'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class VueController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/vue/index.html');
        }
    }
    return VueController;
};
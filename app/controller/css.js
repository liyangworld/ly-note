'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class CssController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/css/index.html');
        }
    }
    return CssController;
};
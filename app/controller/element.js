'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class ElementController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/element/index.html');
        }
    }
    return ElementController;
};
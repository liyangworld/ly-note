'use strict';
/**
 * Created by liyang on 2017-08-02.
 */

module.exports = app => {
    class HtmlController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/html/index.html',{title:'controller'});
        }
    }
    return HtmlController;
};
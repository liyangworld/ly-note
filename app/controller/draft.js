'use strict';
/**
 * Created by liyang on 2017-08-18.
 */

module.exports = app => {
    class DraftController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/draft/index.html');
        }
    }
    return DraftController;
};

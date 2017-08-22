'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class NodeController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/node/index.html');
        }
    }
    return NodeController;
};
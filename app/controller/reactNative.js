'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class ReactNativeController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/reactNative/index.html');
        }
    }
    return ReactNativeController;
};
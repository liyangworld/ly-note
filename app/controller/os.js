'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class OsController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/os/index.html');
        }

        * winHotKey(){
            yield this.ctx.render('pages/os/windows/winHotKey.html',{action:'winHotKey'});
        }
        * winCli(){
            yield this.ctx.render('pages/os/windows/winCli.html',{action:'winCli'});
        }

        * lixHotKey(){
            yield this.ctx.render('pages/os/linux/lixHotKey.html',{action:'lixHotKey'});
        }
        * lixCli(){
            yield this.ctx.render('pages/os/linux/lixCli.html',{action:'lixCli'});
        }
    }
    return OsController;
};
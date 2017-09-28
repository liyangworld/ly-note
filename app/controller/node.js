'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class NodeController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/node/index.html');
        }
        * quickStart(){
            yield this.ctx.render('pages/node/quickStart.html',{action:'quickStart'});
        }
        * module(){
            yield this.ctx.render('pages/node/module.html',{action:'module'});
        }

        * global(){
            yield this.ctx.render('pages/node/coreModules/global.html',{action:'global'});
        }
        * process(){
            yield this.ctx.render('pages/node/coreModules/process.html',{action:'process'});
        }
        * child_process(){
            yield this.ctx.render('pages/node/coreModules/child_process.html',{action:'child_process'});
        }
        * Buffer(){
            yield this.ctx.render('pages/node/coreModules/Buffer.html',{action:'Buffer'});
        }

        * querystring(){
            yield this.ctx.render('pages/node/coreModules/querystring.html',{action:'querystring'});
        }

        * url(){
            yield this.ctx.render('pages/node/coreModules/url.html',{action:'url'});
        }
        * dns(){
            yield this.ctx.render('pages/node/coreModules/dns.html',{action:'dns'});
        }
        * path(){
            yield this.ctx.render('pages/node/coreModules/path.html',{action:'path'});
        }
        * http(){
            yield this.ctx.render('pages/node/coreModules/http.html',{action:'http'});
        }
        * https(){
            yield this.ctx.render('pages/node/coreModules/https.html',{action:'https'});
        }
        * fs(){
            yield this.ctx.render('pages/node/coreModules/fs.html',{action:'fs'});
        }
    }
    return NodeController;
};
'use strict';
/**
 * Created by liyang on 2017-08-06.
 */

module.exports = app => {
    class JavascriptController extends app.Controller {
        * index(){
            yield this.ctx.render('pages/javascript/index.html');
        }
        * versions(){
            yield this.ctx.render('pages/javascript/versions.html',{action:'versions'});
        }
        * grammar(){
            yield this.ctx.render('pages/javascript/grammar.html',{action:'grammar'});
        }
        * dataTypes(){
            yield this.ctx.render('pages/javascript/dataTypes.html',{action:'dataTypes'});
        }
        * operator(){
            yield this.ctx.render('pages/javascript/operator.html',{action:'operator'});
        }
        * objDescription(){
            yield this.ctx.render('pages/javascript/objDescription.html',{action:'objDescription'});
        }
        * arrDescription(){
            yield this.ctx.render('pages/javascript/arrDescription.html',{action:'arrDescription'});
        }
        * fnDescription(){
            yield this.ctx.render('pages/javascript/fnDescription.html',{action:'fnDescription'});
        }

        * Object(){
            yield this.ctx.render('pages/javascript/Object.html',{action:'Object'});
        }
        * Array(){
            yield this.ctx.render('pages/javascript/Array.html',{action:'Array'});
        }
        * String(){
            yield this.ctx.render('pages/javascript/String.html',{action:'String'});
        }
        * Number(){
            yield this.ctx.render('pages/javascript/Number.html',{action:'Number'});
        }
        * Boolean(){
            yield this.ctx.render('pages/javascript/Boolean.html',{action:'Boolean'});
        }
        * RegExp(){
            yield this.ctx.render('pages/javascript/RegExp.html',{action:'RegExp'});
        }
        * Math(){
            yield this.ctx.render('pages/javascript/Math.html',{action:'Math'});
        }
        * Date(){
            yield this.ctx.render('pages/javascript/Date.html',{action:'Date'});
        }
        * JSON(){
            yield this.ctx.render('pages/javascript/JSON.html',{action:'JSON'});
        }
        * console(){
            yield this.ctx.render('pages/javascript/console.html',{action:'console'});
        }
        * Globals(){
            yield this.ctx.render('pages/javascript/Globals.html',{action:'Globals'});
        }

        * NewThis(){
            yield this.ctx.render('pages/javascript/NewThis.html',{action:'NewThis'});
        }
        * Prototype(){
            yield this.ctx.render('pages/javascript/Prototype.html',{action:'Prototype'});
        }

    }
    return JavascriptController;
};
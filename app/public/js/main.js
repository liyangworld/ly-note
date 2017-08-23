'use strict';
/**
 * Created by liyang on 2017-08-23.
 */

//--------自定义title样式---------
window._initMyTitle = function () {
    var preTitle = null;
    var elTitle = null;
    var els = document.getElementsByClassName('my-title');
    for(var i =0;i <els.length;i++){
        var el = els[i];
        if(el.title){
            el.onmouseover = function (e) {
                preTitle = this.title;
                this.title = '';
                elTitle = document.createElement('div');
                elTitle.textContent = preTitle;
                elTitle.className = 'my-title-show';
                document.body.appendChild(elTitle);
            };
            el.onmouseout = function (e) {
                this.title = preTitle;
                document.body.removeChild(elTitle);
            };
            el.onmousemove = function (e) {
                e = e || window.e;
                elTitle.style.top = e.clientY+10+'px';
                elTitle.style.left = e.clientX+10+'px';
            }
        }
    }
};


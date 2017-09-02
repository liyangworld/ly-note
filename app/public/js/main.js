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
                elTitle.innerHTML = preTitle;
                elTitle.className = 'my-title-show';
                document.body.appendChild(elTitle);
            };
            el.onmouseout = function (e) {
                this.title = preTitle;
                document.body.removeChild(elTitle);
            };
            el.onmousemove = function (e) {
                e = e || window.e;
                if((e.clientX+ 10 + elTitle.offsetWidth) < window.innerWidth){
                    elTitle.style.left = e.clientX+10+'px';
                }else{
                    elTitle.style.right = window.innerWidth- e.clientX+10+'px';
                }
                if((e.clientY+ 10 + elTitle.offsetHeight) < window.innerHeight){
                    elTitle.style.top = e.clientY+10+'px';
                }else{
                    elTitle.style.bottom = window.innerHeight- e.clientY+10+'px';
                }

            }
        }
    }
};

window.onload = function () {
    _initMyTitle();
};


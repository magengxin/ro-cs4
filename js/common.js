(function(){var t,n,o,i,e={};window.S=e,n={},window.S.api=n,o="http://dcms.thedream.cc/sgzj/sb/",t=function(t,n,o){var i,e,r;if(this.type=t,"POST"===t||"PUT"===t||"DELETE"===t?(this.data=n&&JSON.stringify(n),this.contentType="application/json"):this.data=n,this.cache=!1,null!=o){e=[];for(i in o)r=o[i],e.push(this[i]=r);return e}},i=function(t){if(401===t.status)return e.toast("您尚未登录！")};var r=function(t,n,e,r,s){return n.indexOf("http")<0&&(n=o+n),console.log(n),new Promise(function(o,r){var a={type:t,url:n,success:function(t){o(t)},error:function(t){i(t),r(t)},cache:!1};a.dataType=s&&"jsonp","POST"===t||"PUT"===t||"DELETE"===t?(a.data=e,a.contentType="application/json"):a.data=e,$.ajax(a)})};n.get=function(t,n,o){return r("GET",t,n,0,!0)},n.getOrigin=function(t,n,o){return r("GET",t,n,0,!1)},n.getAbsolute=function(n,o,e){return Promise.resolve($.ajax(n,new t("GET",o,e)).fail(i))},n.post=function(t,n,o){return r("POST",t,n,0,!0)},n.postOrigin=function(t,n,o){return r("POST",t,n,0,!1)},n.put=function(t,n){return r("PUT",t,n,settings,!0)},n.putOrigin=function(t,n){return r("PUT",t,n,settings,!1)},n.delete=function(t,n){return r("delete",t,n,settings,!0)},n.deleteOrigin=function(t,n){return r("delete",t,n,settings,!1)},e.resourceRoot="/r/"}).call(this),function(){function t(t){if(this.option={resourceType:"image",baseUrl:"./",resources:[],onStart:null,onProgress:null,onComplete:null},!t)return void alert("参数错误！");for(i in t)this.option[i]=t[i];this.status=0,this.total=this.option.resources.length||0,this.currentIndex=0}function n(t,n){if(t!=r){r=t;var o=$("<div class='toast' style='opacity: 0;top:100px'><div class='message'>"+t+"</div></div>");o.delay(100).appendTo(e).animate({opacity:1,top:0},300),setTimeout(function(){r=null,o.animate({opacity:0,top:"-100px"},300,function(){o.remove()})},n||3e3)}}var o=function(t){return"function"==typeof t};t.prototype.start=function(){this.status=1;for(var t=this,n=this.option.baseUrl,i=0,e=this.option.resources.length;i<e;i++){var r=this.option.resources[i],s="";s=0===r.indexOf("http://")||0===r.indexOf("https://")?r:n+r;var a=new Image;a.onload=function(){t.loaded()},a.onerror=function(){t.loaded()},a.src=s}o(this.option.onStart)&&this.option.onStart(this.total)},t.prototype.loaded=function(){o(this.option.onProgress)&&this.option.onProgress(++this.currentIndex,this.total),this.currentIndex===this.total&&o(this.option.onComplete)&&this.option.onComplete(this.total)},window.S.preload=function(n,i,e){new t({resources:n,onStart:function(t){},onProgress:function(t,n){var i=t/n*100;e&&o(e)&&e(i)},onComplete:function(t){i&&o(i)&&i(t)}}).start()};var e=$(".toast-container"),r=null;window.toast=n}.call(this);
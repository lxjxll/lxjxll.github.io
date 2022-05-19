//手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " hide";
}

/**
 *live3d模型load
 *
 */
function loadScript(src, callback) {
    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            callback();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            var target = window.event.srcElement;
            if (target.readyState == 'loaded') {
                callback();
            }
        });
    }
    head.appendChild(script);
}

function loadlive2d() {
    if (document.body.clientWidth > 600) {
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                //https://cdn.jsdelivr.net/combine/npm/luxiaojie-oss@1.0.4/pixi.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismcore.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismframework.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismpixi.min.js
                loadScript('https://npm.elemecdn.com/luxiaojie-oss@latest/pixi.min.js', () => {
                    loadScript('https://npm.elemecdn.com/luxiaojie-oss@latest/live2dcubismcore.min.js', () => {
                        loadScript('https://npm.elemecdn.com/luxiaojie-oss@latest/live2dcubismframework.js', () => {
                            loadScript('https://npm.elemecdn.com/luxiaojie-oss@latest/live2dcubismpixi.js', () => {
                                loadScript('/js/load.js', function () {
                                    loadModel();
                                })
                            })
                        })
                    })
                })
            }
        }
    }
}

loadlive2d()
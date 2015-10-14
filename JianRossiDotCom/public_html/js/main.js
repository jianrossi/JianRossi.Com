if (window.addEventListener) {              
    window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {                 
    window.attachEvent("onresize", browserResize);
}
var xbeforeResize = window.innerWidth;
var ybeforeResize = window.innerWidth;
var zbeforeResize = window.innerWidth;

function fix_sidemenu() {
    var w, top;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    top = scrolltop()      
    if (w < 993 && w > 600) {
        if (top == 0) {
           // document.getElementById("sidemenu").style.paddingTop = "147px";            
        }
        if (top > 0 && top < 100) {
            //document.getElementById("sidemenu").style.paddingTop = (140 - top) + "px";            
        }
        if (top > 100) {
           // document.getElementById("sidemenu").style.paddingTop = document.getElementById("topnav").offsetHeight + "px";            
            document.getElementById("belowtopnav").style.paddingTop = "2.75em";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    } else {
        if (top == 0) {
            if (w < 600) {
          //      document.getElementById("sidemenu").style.paddingTop = "109px";
            } else {
          //      document.getElementById("sidemenu").style.paddingTop = "0";
            }
        }
        if (top > 63) {
         //   document.getElementById("sidemenu").style.paddingTop = "0";            
            document.getElementById("belowtopnav").style.paddingTop = "2.75em";        
            document.getElementById("topnav").style.position = "fixed";        
            document.getElementById("topnav").style.top = "0";                
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    }
}


function scrolltop() {
    var top = 0;
    if (typeof(window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}
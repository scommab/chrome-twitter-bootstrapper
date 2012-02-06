function getElementsByClassName(strClassName){
    var arrElements = document.all;
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];
        if(oRegExp.test(oElement.getAttribute("class"))){
            arrReturnElements.push(oElement);
        }
    }
    return (arrReturnElements)
}
function injectCSS(url) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  link.media = 'all';  
  head.appendChild(link);
}
injectCSS("http://twitter.github.com/bootstrap/assets/css/bootstrap.css")
injectCSS("http://twitter.github.com/bootstrap/assets/css/bootstrap-responsive.css")
// Add a container class if non exists
if(getElementsByClassName("container").length == 0 && getElementsByClassName("container-fluid").length == 0 ) {
  var body = document.getElementsByTagName('body')[0];
  if(body.getAttribute("class") == null) {
    body.setAttribute("class", "container-fluid");
  } else {
    body.setAttribute("class", body.getAttribute("class") + " container-fluid");
  }
}

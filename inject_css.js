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
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = "http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css"
link.media = 'all';  
head.appendChild(link);
if(getElementsByClassName("container").length == 0) {
  var body = document.getElementsByTagName('body')[0];
  if(body.getAttribute("class") == null) {
    body.setAttribute("class", "container");
  } else {
    body.setAttribute("class", body.getAttribute("class") + " container");
  }
}

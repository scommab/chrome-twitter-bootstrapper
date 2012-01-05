var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
// Always use the head version
link.href = "http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css"
link.media = 'all';  
head.appendChild(link);

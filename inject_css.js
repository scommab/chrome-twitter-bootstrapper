var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
// Always use the head version
link.href = "https://raw.github.com/twitter/bootstrap/master/bootstrap.min.css";
link.media = 'all';  
head.appendChild(link);

 function HTMLFunc() {
     var a = confirm();
     var search = document.getElementById("search").value;
     var win = window.open("https:www.reddit.com/r/" +
         search);
     if (win) {
         win.focus();
     }
 }
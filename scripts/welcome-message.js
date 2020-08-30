var today = new Date();
var hour = today.getHours();
var msg;
if (hour > 18 ) {msg = "Good evening!";}
else if (hour > 12) {msg = "Good afternoon!";}
else if (hour > 0) {msg = "Good morning!";}
else {msg = "Welcome!";}


document.write("<h2 class=\"specialtitle center welcome\" style=\"position : relative; bottom : 30%;\">" + msg + "</h2>");
function page1take_photo() {
    document.location.href = 'page1-2.html';
}

function run() {
    var c = document.getElementById("content");
    var n = document.createElement("p");
    var message = "Hello, JavaScript!!!!!!!!!";
    n.appendChild(document.createTextNode(message));
    c.appendChild(n);
    localStorage["ZZ"] = document.getElementById("qqq").src;
    document.location.href = 'zz.html'
    
    /*
    var canvas =document.createElement('canvas');  

     var ctx = canvas.getContext('2d');  
     var video = document.getElementById("live_video");
 
     ctx.fillStyle = "#ffffff";  
     ctx.fillRect(0, 0, 300, 300);  
     
     console.log( video.width);
     console.log( video.height);
     
     ctx.drawImage(video, 0, 0, 100, 100);  
     //document.body.append(canvas);  
     c.appendChild(canvas);
     console.log("Q");*/
     

}
 /*
var video_element = document.getElementById('video');  
if (navigator.getUserMedia) { // opera should use opera.getUserMedia now, chrome use webkitGetUserMedia  
         navigator.getUserMedia('video',success, error);  
}  
function success(stream) {  
         video_element.src =stream;  
}*/
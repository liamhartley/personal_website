var imgCount = 3;
    var dir = 'images/portrait/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "pic1.jpeg",
            images[2] = "pic2.jpg",
            images[3] = "pic3.jpeg",
    document.getElementById("portraitID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

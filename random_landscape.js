var imgCount = 3;
    var dir = 'images/landscape/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "eastonriver_l.jpeg",
            images[2] = "towerbridge_l.jpeg",
            images[3] = "victoriapark_l.jpeg",
    document.getElementById("landscapeID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

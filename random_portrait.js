var imgCount = 3;
    var dir = 'images/portrait/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "beautifulbridge_p.jpeg",
            images[2] = "stormybridge_p.jpeg",
            images[3] = "opentowerbridge_p.jpg"
    document.getElementById("portraitID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";

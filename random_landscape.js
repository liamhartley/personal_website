var imgCount = 2;
    var dir = 'images/photos/pandemic_series/';
    var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
    var images = new Array
            images[1] = "l_rotherite.png",
            images[2] = "l_tower_bridge.png",
    document.getElementById("landscapeID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
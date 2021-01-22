
function showNav() {
    var link_arrow = document.getElementById("link_arrow");
    var link_logo = document.getElementById("link_logo");
    var link_circles = document.getElementById("link_circles");
    var link_cross = document.getElementById("link_cross");

    var collapsible_nav = document.getElementById("collapsible_nav");

    var w3_top = document.getElementById("w3-top");

    if (collapsible_nav.style.display === "none") {
        link_arrow.style.display = "none";
        link_logo.className = "w3-display-left";
        link_logo.style.width = "120px";
        link_circles.className = "w3-display-middle";
        link_circles.style.width = "60px";
        link_cross.style.display = "block";
        collapsible_nav.style.display = "block";
        w3_top.className += " w3-top";
        w3_top.style.backgroundColor = "#eae3dc";
    } else {
        link_arrow.style.display = "block";
        link_logo.className = "w3-display-middle";
        link_logo.style.width = "30vw";
        link_circles.className = "w3-display-right";
        link_circles.style.width = "15vw";
        link_cross.style.display = "none";
        collapsible_nav.style.display = "none";
        w3_top.className -= " w3-top";
        w3_top.style.backgroundColor = "#eae3dc";
    }
}






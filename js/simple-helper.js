var Helper = {};

Helper.show = function (tag, style) {
    document.getElementById(tag).style.display="block";
    document.getElementById(style).style.color="black";
}

Helper.hide = function (tag, style) {
    document.getElementById(tag).style.display="none";
    document.getElementById(style).style.color = "white";
}

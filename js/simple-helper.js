var Helper = {};

Helper.show = function (tag, style) {
    document.getElementById(tag).style.display="block";
    document.getElementById(style).style.color="black";
    document.getElementById(style).style.background="#9698eb";
}

Helper.hide = function (tag, style) {
    document.getElementById(tag).style.display="none";
    document.getElementById(style).style.color = "white";
    document.getElementById(style).style.background="#686af8";
}

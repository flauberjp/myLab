var load = function () {
    var str = "nicraboy";
    var bytes = utf8.encode(str);
    var encodedStr = base64.encode(bytes);
    document.getElementById("encoded").innerHTML = encodedStr;
};

window.onload = function () {
    for (var i = 0; i < $(".nav-link").length; i++) {
        $(".nav-link").eq(i).text("page" + (i + 1));
    }
    for (var i = 0; i < $(".dropdown-item").length; i++) {
        $(".dropdown-item").eq(i).text("item" + (i + 1));
    }
}
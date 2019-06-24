window.addEventListener('load', function () {

    var open_menu = document.getElementById("open_menu");
    var inside_menu = document.getElementById("inside_menu");




    open_menu.addEventListener('click', open_inside_menu);
    inside_menu.addEventListener('mouseleave', close_inside_menu);



    function open_inside_menu() {
        inside_menu.style.display = "block";
        // inside_menu.style.display = (inside_menu.style.display == 'none') ? 'block' : 'none';
    };


    function close_inside_menu(event) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        }
        this.style.display = "none";
    }

})
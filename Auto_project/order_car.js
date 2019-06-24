window.addEventListener("load", function () {


    var name = document.getElementById("name");
    var sername = document.getElementById("sername");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var submit = document.getElementById("submit");
    var checkbox = document.getElementById("checkbox_end");

    function validate(elem, pattern) {
        var result = elem.value.search(pattern);
        if (result == -1) {
            elem.value = "";
            elem.style.borderColor = "red";
        } else {
            elem.style.borderColor = "rgb(197, 195, 195)";
        }
    }

    function emailchange() {
        var poshta = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        validate(this, poshta);
    }

    function textchange() {
        var text = /^[а-яА-Я]+$/;
        validate(this, text);
    }

    function telchange() {
        var tel = /[0-9]{10}/;
        validate(this, tel);
    }


    name.onchange = textchange;
    sername.onchange = textchange;
    phone.onchange = telchange;
    email.onchange = emailchange;


    submit.addEventListener('click', (e) => {
        if (!checkbox.checked) {
            e.preventDefault();
        }
    });

    // import  date_order  from 'C:xampp/htdocs/project/automobile.js';
    // var date_order_start = document.getElementById('date_order_start');
    // var data_label = document.getElementsByClassName('data_label');
    // data_label[0].innerText += date_order_start;

})
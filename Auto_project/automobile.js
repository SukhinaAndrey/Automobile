window.addEventListener('load',function(){
    var back_new_order = document.getElementsByClassName('background_new_order')[0];
    var btn_order_car = document.getElementsByClassName('order_car');
    var submit = document.getElementById('end_of_order');
    var agree = document.getElementById('agree');
    var agree2 = document.getElementById('agree2');


    for(let i=0;i<btn_order_car.length;i++){
        btn_order_car[i].addEventListener('click',visible_block);
    }

    back_new_order.addEventListener('click',close_new_order);

    function visible_block(){

        back_new_order.style.display = "flex";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.body.style.overflow = "hidden";
    }

    function close_new_order(event){
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e.parentNode.parentNode == this
            || e.parentNode.parentNode.parentNode == this ||
             e.parentNode.parentNode.parentNode.parentNode == this) {
            return;
        }
        this.style.display = "none";
        document.body.style.overflow = "visible";
    }

    submit.addEventListener('click', (e) => {
        if (!agree.checked || !agree2.checked) {
            e.preventDefault();
        }
    });
})
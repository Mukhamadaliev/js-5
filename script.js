document.addEventListener('DOMContentLoaded', function () {


    let input = document.querySelector('.btn');
    let modal = document.querySelector('.modal');
    let clickCount = 0;

    input.addEventListener('click', function () {
        clickCount++;

        if (clickCount % 2 === 0) {
            modal.style.display = 'block';
        } else {
            modal.style.display = 'none';
        }

    });

    let icon = document.querySelector(".yurak");
    icon.addEventListener("click", function () {
        icon.style.color = "red";
    });

    let btn1 = document.querySelector(".btn-1");
    btn1.addEventListener("mouseover", function () {
        btn1.style.backgroundColor = "blue";
        btn1.innerHTML = "Mouse is over!";
    });

    btn1.addEventListener("mouseout", function () {
        btn1.style.backgroundColor = "";
        btn1.innerHTML = "Shop Now";
    });
    


      let btn2 = document.querySelector(".btn-2");
    btn2.addEventListener("mouseover", function () {
        btn2.style.backgroundColor = "blue";
        btn2.innerHTML = "Mouse is over!";
    });

    btn2.addEventListener("mouseout", function () {
        btn2.style.backgroundColor = "";
        btn2.innerHTML = "Shop Now";
    });
});

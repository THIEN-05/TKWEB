window.onload = function () {
    let books = document.getElementsByClassName("book");
    for (let f of books)
        f.classList.add("wow");
    let addbooks = document.querySelectorAll('.book');
    for (let f of addbooks)
        f.classList.add("animate__pulse");


    document.getElementById("show-login").addEventListener("click", function () {
        document.querySelector(".popup").style.display = "flex";
    });
    document.querySelector(".close").addEventListener("click", function () {
        document.querySelector(".popup").style.display = "none";
    });

    wow = new WOW(
        {
        boxClass:     'wow',     
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true       
      }
      )
      wow.init();

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
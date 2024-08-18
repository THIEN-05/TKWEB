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
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    //   p.onclick=function(){
    //     document.getElementById("clicknav").style.display="block";
        
    //   }
}
window.onload = function () {
    let books = document.getElementsByClassName("book");
    for (let f of books)
        f.classList.add("wow");
    let addbooks = document.querySelectorAll('.book');
    for (let f of addbooks)
        f.classList.add("animate__pulse");

//dang nhap
    document.getElementById("show-login").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        const popup = document.querySelector(".popup");
        popup.style.display = "flex";
        popup.classList.remove("fade-out"); // Xóa lớp fade-out nếu có
    });

    document.querySelector(".close").addEventListener("click", function() {
        const popup = document.querySelector(".popup");
        popup.classList.add("fade-out"); // Thêm lớp fade-out để kích hoạt animation
        const content = document.querySelector(".content");
        content.classList.add("fade-out"); // Thêm lớp fade-out cho nội dung

        setTimeout(function() {
            popup.style.display = "none"; // Ẩn popup sau khi animation kết thúc
            popup.classList.remove("fade-out"); //
        }, 500); 
    });

    document.getElementById("show-login-2").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        const popup = document.querySelector(".popup");
        popup.style.display = "flex";
        popup.classList.remove("fade-out"); // Xóa lớp fade-out nếu có
    });

    document.querySelector(".close").addEventListener("click", function() {
        const popup = document.querySelector(".popup");
        popup.classList.add("fade-out"); // Thêm lớp fade-out để kích hoạt animation
        const content = document.querySelector(".content");
        content.classList.add("fade-out"); // Thêm lớp fade-out cho nội dung

        setTimeout(function() {
            popup.style.display = "none"; // Ẩn popup sau khi animation kết thúc
            popup.classList.remove("fade-out"); //
        }, 500); 
    });
//wow
    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true
        }
    )
    wow.init();
    //show ảnh
    let myimg = document.getElementsByTagName("img");
    let myim = document.getElementById("popimg");
    let popup = document.querySelector(".popupanh");
    for (let im of myimg)
        im.onclick = function () {
            myim.src = this.src;
            popup.classList.add("show");

        }
    let close=document.querySelector(".popupanh .closeanh");
    close.onclick=function(){
        popup.classList.remove("show");
    }
}
//go to top
window.onscroll = function () { scrollFunction() };

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
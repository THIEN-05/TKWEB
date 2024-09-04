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
            popup.classList.remove("fade-out"); // Đặt lại lớp fade-out để sẵn sàng cho lần mở tiếp theo
            content.classList.remove("fade-out"); // Đặt lại lớp fade-out cho nội dung
        }, 500); // Thời gian trùng với thời gian animation
    });

    document.getElementById("show-login-2").addEventListener("click", function(event) {
        event.preventDefault(); 
        const popup = document.querySelector(".popup");
        popup.style.display = "flex";
        popup.classList.remove("fade-out"); 
    });

    document.querySelector(".close").addEventListener("click", function() {
        const popup = document.querySelector(".popup");
        popup.classList.add("fade-out"); 
        const content = document.querySelector(".content");
        content.classList.add("fade-out"); 

        setTimeout(function() {
            popup.style.display = "none"; 
            popup.classList.remove("fade-out"); 
            content.classList.remove("fade-out"); 
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
    // show ảnh
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
// go to top
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

//Chuyen sang ENGLISH
document.addEventListener('DOMContentLoaded', function () {
    const switchToVn = document.getElementById('switch-to-vn');
    const switchToEn = document.getElementById('switch-to-en');
    const languageMenu = document.getElementById('language-menu');
    const languageParent = document.getElementById('language-parent');

    // Chuyển đổi ngôn ngữ sang tiếng Việt
    switchToVn.addEventListener('click', function (e) {
        e.preventDefault();
        changeLanguage('vn');
        reorderLanguageButtons('vn');
    });

    // Chuyển đổi ngôn ngữ sang tiếng Anh
    switchToEn.addEventListener('click', function (e) {
        e.preventDefault();
        changeLanguage('en');
        reorderLanguageButtons('en');
    });

    // Hàm chuyển đổi ngôn ngữ
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-en], [data-vn]');
        elements.forEach(function (element) {
            if (lang === 'vn') {
                element.innerHTML = element.getAttribute('data-vn');
            } else if (lang === 'en') {
                element.innerHTML = element.getAttribute('data-en');
            }
        });
    }

    // Hàm thay đổi vị trí các nút ngôn ngữ
    function reorderLanguageButtons(lang) {
        if (lang === 'en') {
            // Di chuyển "ENGLISH" vào phần cha và "TIẾNG VIỆT" vào menu con
            languageParent.insertBefore(switchToEn, languageParent.firstChild);
            languageMenu.appendChild(switchToVn);
        } else {
            // Di chuyển "TIẾNG VIỆT" vào phần cha và "ENGLISH" vào menu con
            languageParent.insertBefore(switchToVn, languageParent.firstChild);
            languageMenu.appendChild(switchToEn);
        }
    }

});

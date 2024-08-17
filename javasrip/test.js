window.onload=function(){


document.getElementById("show-login").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});
}
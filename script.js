const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var painel = this.nextElementSibling;
        if (painel.style.display === "block") {
            painel.style.display = "none";
        } else {
            painel.style.display = "block";
        }
    });
}
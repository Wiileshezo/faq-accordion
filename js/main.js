var accordion = document.getElementsByClassName("accordion-title");
accordion[0].nextElementSibling.style.display = "block";
document.querySelectorAll(".plus")[0].src = "assets/images/icon-minus.svg";

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    for (let j = 0; j < accordion.length; j++) {
      const close = accordion[j];
      if (i == j) continue;
      document.querySelectorAll(".plus")[j].src = "assets/images/icon-plus.svg";
      close.classList.remove("active");
      close.nextElementSibling.style.display = "none";
    }
    this.classList.toggle("active");
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      document.querySelectorAll(".plus")[i].src = "assets/images/icon-plus.svg";
    } else {
      accordionContent.style.display = "block";
      document.querySelectorAll(".plus")[i].src =
        "assets/images/icon-minus.svg";
    }
  });
}

     let currentSlide = 0;
  const slider = document.getElementById("slider");
  const images = slider.children.length;
  const visibleImages = 5; // ek row me kitni dikhani hai
  const imageWidth = 215; // 200px image + 15px gap

  function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > images - visibleImages) currentSlide = images - visibleImages;
    slider.style.transform = `translateX(${-currentSlide * imageWidth}px)`;
  }






  
  const btn1 = document.querySelector(".qst1");
  const btn2 = document.querySelector(".qst2");
  const btn3 = document.querySelector(".qst3");
  const btn4 = document.querySelector(".qst4");
  const btn5 = document.querySelector(".qst5");
  const btn6 = document.querySelector(".qst6");

  let list = document.querySelectorAll(".question");

  btn1.addEventListener("click", destroy);
  btn2.addEventListener("click", destroy);
  btn3.addEventListener("click", destroy);
  btn4.addEventListener("click", destroy);
  btn5.addEventListener("click", destroy);
  btn6.addEventListener("click", destroy);

  function destroy() {
    list.forEach(answer => {
      if (answer.lastElementChild.style.display === "block" && answer.firstElementChild !== this) {
        answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
        answer.lastElementChild.style.display = "none";
      }
    });

    let element = this.nextElementSibling;
    if (element.style.display === "none" || element.style.display === "") {
      this.lastElementChild.style.transform = "rotate(45deg)";
      element.style.display = "block";
    } else {
      this.lastElementChild.style.transform = "rotate(0deg)";
      element.style.display = "none";
    }
  }
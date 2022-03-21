// BLOCK 1
const chatBoxes1 = document.querySelectorAll(".chat__line-box-1");
const btnsBox1 = document.querySelector(".btns-box1");
const btns1 = document.querySelectorAll(".js-btn1");
const answer1 = document.querySelector(".answer-1");
const imgs1 = document.querySelectorAll(".chat__line-box-1 .chat__img-1");

// BLOCK 2
const chatBoxes2 = document.querySelectorAll(".chat__line-box-2");
const btnsBox2 = document.querySelector(".btns-box2");
const btns2 = document.querySelectorAll(".js-btn2");
const answer2 = document.querySelector(".answer-2");
const imgs2 = document.querySelectorAll(".chat__line-box-2 .chat__img-2");

// BLOCK 3
const chatBoxes3 = document.querySelectorAll(".chat__line-box-3");
const imgs3 = document.querySelectorAll(".chat__line-box-3 .chat__img-3");

// BLOCK 1
window.onload = function() {
    chatBoxes1.forEach((chatBox, i) => {
        setTimeout(() => {
           chatBox.classList.remove("hidden");
           
          }, (i + 1) * 2000);

          imgs1.forEach((img, i) => {
            setTimeout(() => {
                img.style.display = "none";
              }, (i + 1) * 2500);
          })
    })

}

// BLOCK 2
btns1.forEach(btn => btn.addEventListener("click", handleFirstBtn));

function handleFirstBtn(e) {
    const target = e.target;
    if (target === btns1[0]) {
        answer1.textContent = `Oui, c'est moi !`;
    } else {
        answer1.textContent = `Non, malheureusement`;
    }

    btnsBox1.classList.add("hidden");
    answer1.style.display = 'inline-block';

    chatBoxes2.forEach((chatBox, i) => {
        setTimeout(() => {
            chatBox.style.display = 'flex';
            window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
    });
        }, (i + 1) * 2000);

        imgs2.forEach((img, i) => {
            setTimeout(() => {
                img.style.display = "none";
              }, (i + 1) * 2500);
          })
    })
}

// BLOCK 3
btns2.forEach(btn => btn.addEventListener("click", handleSecondBtn));

function handleSecondBtn(e) {
    const target = e.target;
    if (target === btns2[0]) {
        answer2.textContent = `Adresse privée, merci`;
    } else {
        answer2.textContent = `Adresse professionnelle, merci`;
    }

    btnsBox2.style.display = 'none';
    answer2.style.display = 'inline-block';

    chatBoxes3.forEach((chatBox, i) => {
        setTimeout(() => {
            chatBox.style.display = 'flex';
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: "smooth",
              });
        }, (i + 1) * 2000);

        imgs3.forEach((img, i) => {
            setTimeout(() => {
                img.style.display = "none";
              }, (i + 1) * 2500);
          })
    })
}




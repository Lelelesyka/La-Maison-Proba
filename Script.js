const themeButton = document.getElementById("themeButton");


// Тёмная тема

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

});



// Плавное появление элементов

const elements = document.querySelectorAll(
    ".card, .article, h2"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }


    });


});



elements.forEach(element=>{


    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "0.8s";


    observer.observe(element);


});




// Кнопка Explore

const explore = document.querySelector(".explore");


explore.addEventListener("click", ()=>{


    document
    .querySelector(".categories")
    .scrollIntoView({

        behavior:"smooth"

    });


});

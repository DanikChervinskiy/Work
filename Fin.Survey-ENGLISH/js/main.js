const redirectLink = "https://www.google.com/";

let quizCards = document.querySelectorAll(".quiz__card");

for(let i = 0; i<quizCards.length; i++){
    let quizCardsButtons = quizCards[i].querySelectorAll(".quiz__card__list li");
    quizCardsButtons.forEach(btn=>{
        btn.addEventListener("click",function(){
            if(i<quizCards.length-1){
                quizCards[i].classList.remove("active");
                quizCards[i+1].classList.add("active");
            }
            if(i==quizCards.length-2){
                document.querySelector(".quiz").classList.add("active");
            }
        });
    })
}
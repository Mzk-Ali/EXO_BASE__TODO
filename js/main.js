console.log("Hello JSSS!");

function ajout(card, objectCards)
{
    objectCards.appendChild(card.cloneNode(true));
    const cards = document.querySelectorAll(".todoCard");
    console.log(cards)
}



objectButton = document.getElementById("btn");
objectButton.style.width="100%";
objectButton.style.margin="10px 0px";



objectCards = document.getElementById("todoCards");

objectCard = document.querySelector(".todoCard");





objectCard = document.getElementsByClassName("todoCard")[0];
//objectCard[0].style.width="30%";
objectCard.style.display="inline-block";
objectCard.style.position="relative";




objectText = document.getElementsByClassName("task");
objectText[0].style.width="100%";
objectText[0].style.boxSizing="border-box";




objetcIcon = document.getElementsByClassName("delBtn")[0];
objetcIcon.style.position="absolute";
objetcIcon.style.bottom="4%";
objetcIcon.style.right="4%";

objectButton.addEventListener("click", ajout(objectCard, objectCards));


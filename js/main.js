console.log("Hello JSSS!");

function ajout()
{
    cloneCard = objectCard.cloneNode(true);
    objectCards.appendChild(cloneCard);
    //const cards = document.querySelectorAll(".todoCard");
    cloneCard.addEventListener("click", function(){this.parentNode.removeChild(this); count()});
    count();
}

function count()
{
    taille = objectCards.childElementCount;
    //console.log(taille);
    divCount.innerHTML = "Le nombre de Card est de : " + taille;
}

function poubelle()
{
    
    console.log("poubelle")
    objectCards.removeChild(objectCard);
    count();
}




objectButton = document.getElementById("btn");
objectButton.style.width="100%";
objectButton.style.margin="10px 0px";



objectCards = document.getElementById("todoCards");
objectCards.style.display="flex";
objectCards.style.flexWrap="wrap";
objectCards.style.gap="10px";

//objectCard = document.querySelector(".todoCard");





objectCard = document.getElementsByClassName("todoCard")[0];
objectCard.style.display="inline-block";
objectCard.style.position="relative";




objectText = document.getElementsByClassName("task")[0];
objectText.style.width="100%";
objectText.style.boxSizing="border-box";




objectIcon = document.getElementsByClassName("delBtn")[0];
objectIcon.style.position="absolute";
objectIcon.style.bottom="4%";
objectIcon.style.right="4%";

objectButton.addEventListener("click", ajout);
objectIcon.addEventListener("click", poubelle);




divCount = document.getElementById("count");
count();


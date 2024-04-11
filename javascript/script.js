// psuedo code
const audio = new Audio("./sounds/Tada-sound.mp3");
const buttons = document.querySelectorAll("button");
const imgContainer = document.querySelector(".imgCont");
const img = document.createElement("img");
const background = document.querySelector('.background');


function pickWhereToEat() {
    // 'Seafood', 'Italian', 'Mexican'

const foodCat = ['American', 'Japanese', 'Chinese', 'Vegan', 'Irish', 'Thai', 'Seafood', 'Italian', 'Mexican', 'Mediterranean', 'Korean'];

    const pickCat = foodCat[Math.floor(Math.random() * foodCat.length)];
    const p = document.querySelector("p");
    const pCat = document.querySelector(".pCat");

    // Edit given parameters

     if (pickCat === 'American') {
 //American food choice
        //let img = document.createElement("img");

        img.setAttribute("src", "./img/american.jpg");
        const amFood = ["Burger Republic", "Jonathans", "MLRose", 'Chop House', "Famous Daves"];
        const pickAmRest = amFood[Math.floor(Math.random() * amFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickAmRest;
        imgContainer.appendChild(img);

        background.style.backgroundImage = "url('./img/american.jpg')";

    } else if (pickCat === 'Japanese') {
        //Japanese Food rest
        img.setAttribute("src", "./img/japanese.jpg");
        const japanFood = ['Oishii', 'Fukutogo', 'Sakura', 'Nobu'];
        const pickJapanRest = japanFood[Math.floor(Math.random() * japanFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickJapanRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/japanese.jpg')";

    } else if (pickCat === 'Chinese') {
        //chinese
        img.setAttribute("src", "./img/chinese.jpg");
        const chineseFood = ['Fulins', 'Chinese Take Out'];
        const pickChineseRest = chineseFood[Math.floor(Math.random() * chineseFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickChineseRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/chinese.jpg')";
        
    }


    else if (pickCat === 'Vegan') {
        //vegan
        img.setAttribute("src", "./img/vegan.jpg");
        const vegFood = ['Sunflower Bakery'];
        const pickVegRest = vegFood[Math.floor(Math.random() * vegFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickVegRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/vegan.jpg')";
       
    } else if (pickCat === 'Irish') {
        //irish
        img.setAttribute("src", "./img/irish.jpg");
        const irishFood = ['MacNamara'];
        const pickIrishRest = irishFood[Math.floor(Math.random() * irishFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickIrishRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/irish.jpg')";

    } else if (pickCat === 'Thai') {
        //thai
        img.setAttribute("src", "./img/thai.jpg");
        const thaiFood = ['Smileys', 'Chada', 'Dusit'];
        const pickThaiRest = thaiFood[Math.floor(Math.random() * thaiFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickThaiRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/thai.jpg')";
       

    } else if (pickCat === 'Seafood') {
        img.setAttribute("src", "./img/seafood.jpg");
        const seafood = ['Red Lobsters'];
        const pickSeafoodRest = seafood[Math.floor(Math.random() * seafood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickSeafoodRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/seafood.jpg')";
       

    } else if (pickCat === 'Italian') {
        img.setAttribute("src", "./img/italian.jpg");
        const italianFood = ['Meatballs', 'Pinky Ring', 'Calabria', 'Mirkos'];
        const pickItalianRest = italianFood[Math.floor(Math.random() * italianFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickItalianRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/italian.jpg')";

    } else if (pickCat === 'Mexican') {
        img.setAttribute("src", "./img/mexican.jpg");
        const mexFood = ['Cinco de Mayo', 'El Ok Corral', 'Los Compadres', 'El Torro'];
        const pickMexRest = mexFood[Math.floor(Math.random() * mexFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickMexRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/mexican.jpg')";
        


    } else if (pickCat === 'Mediterranean') {
        img.setAttribute("src", "./img/mediterranean.jpg");
        const medFood = ['Tazikis', 'Mixed Grill Gyro', 'Osh', 'House of Kabob'];
        const pickMedRest = medFood[Math.floor(Math.random() * medFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickMedRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/mediterranean.jpg')";

    } else if (pickCat === 'Korean') {
        img.setAttribute("src", "./img/korean.jpg");
        const korFood = ['Seoul Garden', 'Babo Korean Bar', 'Mori Mori', 'Red Ninja'];
        const pickKorRest = korFood[Math.floor(Math.random() * korFood.length)];
        pCat.innerHTML = "You have picked " + pickCat + " food.";
        p.innerHTML = pickKorRest;
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/korean.jpg')";
       

    } else {
        img.setAttribute("src", "./img/background.jpg");
        imgContainer.appendChild(img);
        background.style.backgroundImage = "url('./img/background.jpg')";

    }



    buttons.forEach(button => {
        button.addEventListener("click", () => {
            audio.play();
        });
    });

}
//const Food =[];
//const pick  = [];





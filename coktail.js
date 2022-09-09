const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

let divFlex = document.getElementById("flex");

let inputRechercheCocktail = document.getElementById("rechercheCocktail");
let btnrechercheCocktail = document.getElementById("btnrechercheCocktail");

const fetchData = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`);
  const data = await res.json();
  console.log(data);
  return data;
};

btnrechercheCocktail.addEventListener("click", () => {
  let valueRechercheCocktail = inputRechercheCocktail.value;
  divFlex.innerHTML = "";

  const cocktail = async () => {
    const cocktailRecherche = await fetchData(`s=${valueRechercheCocktail}`);

    cocktailRecherche.drinks.map((cocktail) => {

      
      // var new_object = {};
      
      // Object.keys(cocktail).forEach(function(key){
      //     if (typeof cocktail[key] != 'undefined' && cocktail[key]!=null){
      //         new_object[key] = cocktail[key];
      //     }
      // });
      // console.log(new_object)
      



      const div = creatElement("div");
      div.setAttribute("class", "divBoisson");
      const h2 = creatElement("h2");
      const img = creatElement("img");
      const p1 = creatElement("p");
      const p2 = creatElement("p");
      const ul1 = creatElement("ul")
      const li1 = creatElement("li")
      const li2 = creatElement("li")
      const li3 = creatElement("li")
      const li4 = creatElement("li")
      const li5 = creatElement("li")
      const li6 = creatElement("li")
      const li7 = creatElement("li")
      const li8 = creatElement("li")
      const li9 = creatElement("li")

      h2.innerHTML = cocktail.strDrink +" / "+ cocktail.strAlcoholic
      img.src = cocktail.strDrinkThumb;
      p2.innerHTML ="Choix du verre : " +  cocktail.strGlass
      p1.innerHTML =cocktail.strInstructions
      if (cocktail.strIngredient1!=null) {
        li1.innerHTML = cocktail.strIngredient1+" => " +" quantité : " + cocktail.strMeasure1
        divElemente(li1,ul1)
      }
      if (cocktail.strIngredient2!=null) {
        li2.innerHTML = cocktail.strIngredient2+" => " +" quantité : " + cocktail.strMeasure2
        divElemente(li2,ul1)
      }
      if (cocktail.strIngredient3!=null) {
        li3.innerHTML = cocktail.strIngredient3+" => " +" quantité : " + cocktail.strMeasure3
        divElemente(li3,ul1)
      }
      if (cocktail.strIngredient4!=null) {
        li4.innerHTML = cocktail.strIngredient4+" => " +" quantité : " + cocktail.strMeasure4
        divElemente(li4,ul1)
      }
      if (cocktail.strIngredient5!=null) {
        li5.innerHTML = cocktail.strIngredient5+" => " +" quantité : " + cocktail.strMeasure5
        divElemente(li5,ul1)
      }
      if (cocktail.strIngredient6!=null) {
        li6.innerHTML = cocktail.strIngredient6+" => " +" quantité : " + cocktail.strMeasure6
        divElemente(li6,ul1)
      }
      if (cocktail.strIngredient7!=null) {
        li7.innerHTML = cocktail.strIngredient7+" => " +" quantité : " + cocktail.strMeasure7
        divElemente(li7,ul1)
      }
      if (cocktail.strIngredient8!=null) {
        li8.innerHTML = cocktail.strIngredient8+" => " +" quantité : " + cocktail.strMeasure8
        divElemente(li8,ul1)
      }
      if (cocktail.strIngredient9!=null) {
        li9.innerHTML = cocktail.strIngredient9+" => " +" quantité : " + cocktail.strMeasure9
        divElemente(li9,ul1)
      }
      

      divElemente(h2, div);
      divElemente(img, div);
      divElemente(p2, div);
      divElemente(p1, div);
      divElemente(ul1, div)
     
      
      
      divElemente(div, divFlex);
      
      
    });
    
  };

  cocktail();
});



function creatElement(creat) {
  return document.createElement(creat);
}

function divElemente(element, enfant) {
  return enfant.appendChild(element);
}
// futur double page
// function clickDiv(elementClique){
//   elementClique.addEventListener("click", (e) => {
  
//   console.log(e.target.id)
  
//   const cocktailPrecis = async () => {
//     const cocktailRecherchePrecise = await fetchData(`iid=${e.target.id}`);
//     console.log(cocktailRecherchePrecise);
//   };
//   document.location.href = "page1.html";
//   cocktailPrecis();
// });
// }
// clickDiv(div)
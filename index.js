document.getElementById("button").addEventListener('click', ()=>{
    let inputValue = document.getElementById('inputName').value
    let detailsElement = document.getElementById("details")
        detailsElement.innerHTML = ""
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        const items = document.getElementById("items")
        items.innerHTML = ""
        if(data.meals == null){
           document.getElementById("msg").style.display = "block"
        }
        else{
            document.getElementById("msg").style.display = "none"
            data.meals.forEach(meal => {
                itemDiv =document.createElement("div")
                itemDiv.className = "m-2"
                itemDiv.setAttribute('onclick', `details('${meal.idMeal}')`)
                let itemInfo =`
                <div class="card" style="width: 18rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-text">${meal.strMeal}</h5>
                    </div>
                </div>
                `
                itemDiv.innerHTML = itemInfo
                items.appendChild(itemDiv)
            });
        }
    })
})

function details(idMeal) {
    console.log(idMeal)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())
    .then(detail => {
        let meal = detail.meals[0]
        console.log(meal)
        let detailsElement = document.getElementById("details")
        detailsElement.innerHTML = ""
        let detailsDiv = document.createElement("div")
        let detailsInfo = `
        <div class="card" style="width: 18rem;">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
              <h3 class="card-text">${meal.strMeal}</h3>
              <ul>
              <p>
                Origin:${meal.strArea}
              </p>
                <p>Category:${meal.strCategory}
                </p>
              </ul>
              <h6>Ingredients</h6>
              <ul>
                <li>${meal.strIngredient1}-${meal.strMeasure1}</li>
                <li>${meal.strIngredient2}-${meal.strMeasure2}</li>
                <li>${meal.strIngredient3}-${meal.strMeasure3}</li>
                <li>${meal.strIngredient4}-${meal.strMeasure4}</li>
                <li>${meal.strIngredient5}-${meal.strMeasure5}</li>
                <li>${meal.strIngredient6}-${meal.strMeasure6}</li>
                <li>${meal.strIngredient7}-${meal.strMeasure7}</li>
                <li>${meal.strIngredient8}-${meal.strMeasure8}</li>
                <li>${meal.strIngredient9}-${meal.strMeasure9}</li>
                <li>${meal.strIngredient10}-${meal.strMeasure10}</li>
                <li>${meal.strIngredient11}-${meal.strMeasure11}</li>
                <li>${meal.strIngredient12}-${meal.strMeasure12}</li>
                <li>${meal.strIngredient13}-${meal.strMeasure13}</li>
              </ul>
                 <h6>Instructions</h6>
              <ul>
                 <li>${meal.strInstructions}</li>
               </ul>
             </div>
        </div>
        `

        detailsDiv.innerHTML = detailsInfo
        detailsElement.appendChild(detailsDiv)

        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    .catch(error => console.error(error))
}
document.getElementById("add-feedback-form").addEventListener("submit",function(event) {
    event.preventDefault();

    let rating = document.getElementById("rating").value
    let feedbackComment = document.getElementById("feedback-comment").value

    console.log("Rating:",rating)
    console.log("Feedback Coment:",feedbackComment)

    document.getElementById("rating").value = ""
    document.getElementById("feedback-comment").value = ""
})

document.getElementById("submit").addEventListener("mouseover",() => {
    console.log("Mouse hovered over the submit button")
})


document.getElementById("inputName").addEventListener("keyup", () => {
    // Handle keyup event, you can add code here for real-time searching/filtering
});
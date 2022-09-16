const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

// initialize all tags
const form = document.querySelector("form")
const input = document.querySelector("input")
const div = document.querySelector("div")
// image
const section = document.querySelector("section")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    // fetches URL
    fetch(`${URL}${input.value}`)
    // convert response to JSON
    .then(res => res.json())
    // log data to tell user that you're able to grab data
    .then(resJson=>{
        // clear out section
        section.innerHTML = ""
        // console.log(resJson)
        // console.log(resJson.meals)
        // iterates over the array
        resJson.meals.forEach(meal => {
           console.log(meal)

            // STEPS:
            // create an element for each meal
            const img = document.createElement("img")
            // give that element inner text of that meals name
            // create an image tag
            img.src = meal.strMealThumb
            // console.log(meal.strMealThumb)
            // give the image tag the src of each meals image 
            // append the element and the image to your page

           section.append(img)

           const p = document.createElement("p")
        //    updates text inside tag
           p.innerText = meal.strMeal
           section.append(p)
        });
    })
    // look for errors
    .catch((err) => console.log(err))

})
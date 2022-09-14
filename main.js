const URL = "http://www.themealdb.com/api/json/v1/1/filter.php?c="

const form = document.querySelector("form")
const input = document.querySelector("input")

form.addEventListener("submit", (event)=>{
    event.preventDefault()


    // fetches URL
    fetch(`${URL}${input.value}`)
    // convert response to JSON
    .then(res => res.json())
    // log data to tell user that you're able to grab data
    .then(resJson=>{
        // console.log(resJson)
        // console.log(resJson.meals)
        // iterates over the array
        resJson.meals.forEach(meal => {
           console.log(meal)
            // STEPS:
            // create an element for each meal
            const img = document.createElement("img")
            // give that element inner text of that meals name
            img.innerText("meal")
            // create an image tag
            img.src = "images/media/meals/llcbn01574260722.jpg/preview"
            // give the image tag the src of each meals image 
            // append the element and the image to your page
           meal.append("img")
        });

    })
    // look for errors
    .catch((err) => console.log(err))

})
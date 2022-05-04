const menuRamen = document.querySelector("#ramen-menu")
const newRamen = document.querySelector("#new-ramen")

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens=>
        ramens.forEach(ramen => renderMenuItems(ramen)))
})
//First Deliverable
// - See all ramen images in the `div` with the id of `ramen-menu`. query selector 
// - When the page loads, request the data from the server to get all the ramen objects. 
// - Then, display the image for each of the ramen using an `img` tag   
// - inside the `#ramen-menu` div. 
// -----------------------------------------------------------------------------------------------
function renderMenuItems(ramen){
    const img = document.createElement("img")
    img.src = ramen.image
    menuRamen.append(img)
    img.addEventListener('click', () => clicker(ramen))
}

//Second Deliverable
// Click on an image from the `#ramen-menu` div evemtListener eventListener click 
// see all the info about that ramen displayed inside the `#ramen-detail` div 
//  it says `insert comment here` and `insert rating here`. 
// -----------------------------------------------------------------------------------------------------
//name of function to click, above eventListener
function clicker(ramen){
    //click images onto box
    const details = document.querySelector("#ramen-detail")
    const imgDetails = details.querySelector('img')
    imgDetails.src = ramen.image
    //text information
    const person = document.querySelector(".name")
    person.textContent = ramen.name
    const restaurant = document.querySelector(".restaurant")
    restaurant.textContent = ramen.restaurant
    const rating = document.querySelector("#rating-display")
    rating.textContent = ramen.rating
    const comments = document.querySelector("#comment-display")
    comments.textContent = ramen.comment
}

// Third Deliverables
// Create a new ramen after submitting the `new-ramen` form. 
// The new ramen should be added to the`#ramen-menu` div. 
// The new ramen does not need to persist; in other words, 
// if you refresh the page, it's okay that the new ramen is no
// longer on the page.
newRamen.addEventListener('submit', (e) => addRamen(e))
function addRamen(e) {
    e.preventDefault()
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }
    renderMenuItems(newRamen)
}


// const allTheRamen = document.querySelector('#ramens')
// const allRamenImg = document.querySelector('#ramen-menu')
// const pickImg = document.querySelector(".detail-image")
// const introduce = document.querySelector(".name")
// const restaurantName = document.querySelector(".restaurant")
// const rating = document.querySelector("#rating-display")
// const comment = document.querySelector("#comment-display")
// const form = document.querySelector('#new-ramen')

// document.addEventListener("DOMContentLoaded", function() {
//     fetch(`http://localhost:3000/ramens`)
//     .then(response => response.json())
//     .then(ramens => {
//         ramens.forEach((ramen) => {
//             ramenHTML(ramen)
//         })
//     })
// })

// const ramenHTML = (ramen) => {
//     const img = document.createElement('img')
//     allRamenImg.append(img)
//     img.src = ramen.image
//     img.addEventListener('click', () => { 
//         introduce.textContent = ramen.name
//         restaurantName.textContent = ramen.restaurant
//         rating.textContent = ramen.rating
//         comment.textContent = ramen.comment
//         pickImg.src = ramen.image
//    }) 
// }
//
//
// form.addEventListener('submit', (e) => newRamen(e))
//function newRamen(add){}
//
//fuck forms
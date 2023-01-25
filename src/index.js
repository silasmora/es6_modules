import Wishlist from "./wishlist";

//Selection statement

const submitForm = document.getElementById("submitForm")

const makeInput = document.querySelector("#makeInput")
const modelInput = document.querySelector("#modelInput")
const yearInput = document.querySelector("#yearInput")

const makeDisplay = document.querySelector("#car-make")
const modelDisplay = document.querySelector("#car-model")
const yearDisplay = document.querySelector("#car-year")

const removeBtn = document.querySelector("#removeBtn")
 
const wishlistUl = document.querySelector("#wishListContainer > ul")

//event listeners

submitForm.addEventListener("submit", addCar)

removeBtn.addEventListener("click", removeCar)

//exercise 6

function showCarDetails(car) {
  //update car displays texts
  makeDisplay.textContent = car.make
  modelDisplay.textContent = car.model
  yearDisplay.textContent = car.year

  //enable the remove button
  removeBtn.disabled = false
  //set the current car's id to the data-carId attribute of removeBtn
  console.log(car.id)
  removeBtn.setAttribute("data-cardId", car.id)

}

//exercise 7

function updateDOMlist() {
  //clear the unordered list
  wishlistUl.innerHTML = ""
  //iterate over the wishlist
  // for (let i = 0; i < wishlist.length; i++) {
  //   const newLi = document.createElement("11")

  //   newLi.textContent = `${wishlist[i].make} ${wishlist[i].model}`

  //   newLi.addEventListener("click", () => {
  //     showCarDetails(wishlist[i])
  //   })

  //   wishlistUl.appendChild(newLi)
  // }

  //iterate over the wishlist
  console.log(wishlist)
  wishlist.list.forEach((car) => {
    //add a le to the ul for each car
    const newLi = document.createElement("li")
    newLi.textContent = `${car.make} ${car.model}`
    //add a click event listener to showCarDetails per list item click
    newLi.addEventListener("click", () => showCarDetails(car))
    wishlistUl.appendChild(newLi)
  })
}

//exercise 8

function addCar(event) {
  event.preventDefault()

  let make = makeInput.value;
  let model = modelInput.value
  let year = yearInput.value

  wishlist.add(make, model, year)

  updateDOMlist()

  //reset form values
  makeInput.value = ""
  modelInput.value = ""
  yearInput.value = ""

}

//exercise 9

function removeCar() {
  //get the displayed car's id
  let carId = Number(removeBtn.getAttribute("data-cardId"))
  //remove the selected car
  wishlist.remove(carId)

  //update the dom list
  updateDOMlist()

  //reset display values
  makeDisplay.textContent = ""
  modelDisplay.textContent = ""
  yearDisplay.textContent = ""

  //disable remove button
  removeBtn.disabled = true
}

//construction


let wishlist = new Wishlist()

// wishlist.add("ford", "Mustang", "2021")
// wishlist.add("toyota", "corolla", "2005")
// wishlist.add("honda", "civic", "2012")
// console.log(wishlist.list)

// wishlist.remove(0)
// console.log(wishlist.list)

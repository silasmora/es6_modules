import Car from "./car"

export default class Wishlist {
  //class properties
  //list
  //nextId
  constructor() {
    //instances properties
    this.list = []
    this.nextId = 0
  }

  add(make, model, year) {
    //use the car class to create a new car
    let car = new Car(++this.nextId, make, model, year)

    //add that car to the wishlist list
    this.list.push(car)
  }

  remove(carId) {
    //How can we remove a specific item in an array?
    //filter
    console.log(carId)
    this.list = this.list.filter((car) => {
      console.log(car)

      return car.id != carId});
      
    // this.list.forEach((value, index) => {
    //   if (value.id == carId) {
    //     //remove this value from the array
    //     this.list.splice(index, 1)
    //   }
    // })

    
  }
}


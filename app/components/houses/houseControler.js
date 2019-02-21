import HouseService from "./housesService.js"

let _hs = new HouseService()

function draw() {
  let houses = _hs.House
  let template = ''
  houses.forEach(house => template += house.getTemplate())
  document.getElementById('available-items').innerHTML = template

  document.querySelector('#available-form').innerHTML = `
  <form onsubmit="app.controllers.houseController.addHouse(event)">
          <input type="number" name="year" placeholder=" year">
          <input type="number" name="price" placeholder="price">
          <input type="number" name="bedrooms" placeholder="bedrooms">
          <input type="number" name="bathrooms" placeholder="bathrooms">
          <input type="text" name="description" placeholder="description">
          <input type="url" name="imgUrl" placeholder="url">
          <button type="submit">Submit</button>
        </form>`
}

//Public

export default class HouseControler {
  constructor() {
    _hs.addSubscriber('houses', draw)

  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
  addHouse(e) {
    e.preventDefault()
    let form = e.target
    let rawData = {

      price: form.price.value,
      year: form.year.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      imgUrl: form.imgUrl,
      description: form.description.value
    }
    _hs.addHouse(rawData)
    form.reset()
  }

  getHouses() {
    _hs.getApiHouses()
  }

}
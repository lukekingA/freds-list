import DataService from "./dataService.js"

let _ds = new DataService()

export default class AddController {
  addItem(event) {
    event.preventDefault()
    let form = event.target
    let type = form.type.value
    let rawData = {
      title: form.title.value,
      price: form.price.value,
      description: form.price.value,
      img: form.img.value
    }
    _ds.addItem(type, rawData)
    form.reset()
  }
}
import Job from "../models/job.js";
import House from "../models/house.js";
import Car from "../models/car.js"


let apiCall = new axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/'
})



let _state = {
  houses: [],
  cars: [],
  jobs: []
}

let _subscribers = {
  houses: [],
  cars: [],
  jobs: []
}

function setState(dataName, val) {
  _state[dataName] = val
  _subscribers[dataName].forEach(fn => fn())
}

//Public
export default class Service {


  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get House() {
    return _state.houses.map(h => new House(h))
  }
  get Cars() {
    return _state.cars.map(c => new Car(c))
  }
  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }

  getApiItems(url = '', type) {
    apiCall.get(type).then(res => {
      let data = res.data.data.map(dItem => {
        let Type
        switch (type) {
          case 'car':
            Type = Car
            break;
          case 'job':
            Type = Job
            break;
          case 'house':
            Type = House
        }
        return new Type(dItem)
      })
      setState(type, data)
    })
  }

  addItem(type, rawItem) {
    switch (type) {
      case 'houses':
        _state.houses.push(new House(rawItem));
        break;
      case 'cars':
        _state.cars.push(new Car(rawItem));
        break;
      case 'jobs':
        _state.jobs.push(new Job(rawItem));
    }
    setState(type)
  }

  deleteItem(type, id) {
    let itemToDelete = _state[type].find(item => item.id == id)
    let indexToRemove = _state[type].indexOf(itemToDelete)
    _state[type].splice(indexToRemove, 1)
    setState(type)
  }
}
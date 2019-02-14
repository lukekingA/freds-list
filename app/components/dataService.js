import Job from "../models/job.js";
import House from "../models/house.js";
import Car from "../models/car.js"


let _state = {
  houses: [new House({
      price: 100000,
      title: 'A real fixer-upper',
      img: 'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794670?k=6&m=856794670&s=612x612&w=0&h=gneLQSj2K6CzxU4r7DG_HUjd00ZMiZnYhYW_R0goPZ4=',
      description: 'There are many things about this house that you should be aware of, but I\'m not tellin'
    }),
    new House({
      price: 60000,
      title: 'Country Home',
      img: ' https://www.porterdavis.com.au/~/media/homes/verona/22/facades/verona-island-facade-classic.jpg?w=582&amp;h=320&amp;crop=1',
      description: 'Wonderful Place'
    })
  ],
  cars: [new Car({
      price: 10000,
      title: 'chevy',
      img: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicle-groups/trucks/01-images/2018-trucks-ld.jpg?imwidth=491',
      description: 'here is some description'
    }),
    new Car({
      price: 500,
      title: 'ford',
      img: 'https://www.clarkscarcare.com/wp-content/uploads/2017/08/shopping-cta-ford.jpg',
      description: 'here is some description'
    })
  ],
  jobs: [
    new Job({
      title: 'Manager',
      company: 'World Org',
      description: 'This is the position that you have alwayse wanted.'
    }),
    new Job({
      title: 'Shoveler',
      company: 'Hard Labor',
      description: 'This is the job that you have been trying to get away from all your life.'
    })
  ]
}

let _subscribers = {
  houses: [],
  cars: [],
  jobs: []
}

function setState(dataName) {
  _subscribers[dataName].forEach(fn => fn())
}

//Public
export default class Service {


  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get House() {
    return _state.houses
  }
  get Cars() {
    return _state.cars
  }
  get Jobs() {
    return _state.jobs
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
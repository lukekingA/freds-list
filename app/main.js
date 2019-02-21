import CarControler from './components/cars/carControler.js'
import HouseControler from './components/houses/houseControler.js'
import JobControler from './components/jobs/jobControler.js'
//import AddControler from "./components/junk/addControler.js/index.js";







class App {
  constructor() {
    this.controllers = {
      carController: new CarControler(),
      houseController: new HouseControler(),
      jobController: new JobControler(),
      //addControler: new AddControler()
    }
  }
}

window.app = new App()
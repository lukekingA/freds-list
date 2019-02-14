import DataService from "./dataService.js"

let _ds = new DataService()

function draw() {
  let jobs = _ds.Jobs
  let template = ''
  jobs.forEach(job => template += job.getTemplate())
  document.getElementById('available-jobs').innerHTML = template
}

//Public

export default class JobControler {
  constructor() {
    _ds.addSubscriber('jobs', draw)
    draw()
  }

  deleteJob(type, id) {
    _ds.deleteItem(type, id)
  }
}
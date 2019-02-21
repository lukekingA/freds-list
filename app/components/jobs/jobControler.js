import JobService from "./jobService.js"

let _js = new JobService()

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => template += job.getTemplate())
  document.getElementById('available-items').innerHTML = template

  document.querySelector('#available-form').innerHTML = `
  <form onsubmit="app.controllers.jobController.addJob(event)">
          <input type="text" name="jobTitle" placeholder=" Job Title">
          <input type="text" name="company" placeholder="company">
          <input type="number" name="rate" placeholder="rate">
          <input type="number" name="hours" placeholder="hours">
          <input type="text" name="description" placeholder="description">
          <button type="submit">Submit</button>
        </form>`
}

//Public

export default class JobControler {
  constructor() {
    _js.addSubscriber('jobs', draw)

  }

  showForm(id) {
    document.getElementById(id).hidden = false
  }

  deleteJob(id) {
    _js.deleteJob(id)
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target
    let rawData = {

      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _js.addJob(rawData)
    form.reset()
  }
  getJobs() {
    _js.getApiJobs()
  }

  updateDesc(e) {
    e.preventDefault()
    let target = _js.Jobs.filter(c => c._id == e.target.id)[0]
    target.description = e.target.description.value
    _js.updateDesc(target)
  }

}
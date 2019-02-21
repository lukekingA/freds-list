import Job from '../../models/job.js'
//private
let apiJobs = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs'
})



let _state = {
  jobs: [],

}


let _subscribers = {
  jobs: []
}

function setState(prop, val) {
  _state[prop] = val
  _subscribers[prop].forEach(fn => fn())
}


export default class Jobs {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }

  addJob(data) {
    apiJobs.post('', data).then(res => {
      this.getApiJobs()
    })
  }

  getApiJobs(url = '') {
    apiJobs.get().then(res => {
      let data = res.data.data.map(p => new Job(p))
      setState('jobs', data)

    })
  }

  deleteJob(id) {
    apiJobs.delete(id).then(res => {
      this.getApiJobs()
    })
  }

  updateDesc(data) {
    apiJobs.put(data._id, data).then(res => {
      this.getApiJobs()
    })
  }

}
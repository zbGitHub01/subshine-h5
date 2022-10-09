import axios from 'axios'

const service = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 60000
})


service.interceptors.response.use(response => {
  const data = response.data
  if (typeof data === 'string') {
    return response
  } else {
    return data
  }
})

const request = {
  get: (url, params = {}) => {
    return service({
      url,
      method: 'get',
      params
    })
  },
  post: (url, data = {}) => {
    return service({
      url,
      method: 'post',
      data
    })
  }
}

export default request

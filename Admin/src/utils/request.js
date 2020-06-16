import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

let HttpRoot = 'http://127.0.0.1:8888/api'

// 创建axios实例
const service = axios.create({
  baseURL: HttpRoot, // api 的 base_url
  timeout: 50000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    var Authorization = window.localStorage.getItem('illyaComAdminToken') ? window.localStorage.getItem('illyaComAdminToken') : '';
    console.log('Authorization',Authorization)
    if (Authorization) {
      config.headers['Token'] = Authorization // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res && res.code !== 200) {
      if (res && res.code == 10086) {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
        router.push({ name: "login", params: { msg: res.msg } })
      } else {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

service.httpRoot = HttpRoot

export default service

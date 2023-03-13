import axios from "axios"

const baseURL = "https://kwctf.com/vue/laravel-vue-survey/public/api"
const axiosClient = axios.create({baseURL})

axiosClient.interceptors.request.use((config) => {
  return config
})

export default axiosClient

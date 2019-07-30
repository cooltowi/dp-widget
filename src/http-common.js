import axios from 'axios'

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'X-Algolia-API-Key': process.env.VUE_APP_API_KEY,
    'X-Algolia-Application-Id': process.env.VUE_APP_ID
  }
})

HTTP.interceptors.response.use(
  function (response) {
    return response
  },
  function (err) {
    console.log(err)
  }
)

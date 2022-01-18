import axios from 'axios'

const CUSTOMER_HEADERS = {
  // 'Time-Zone': 'GMT-0400',
  'Content-Type': 'application/json',
}

axios.interceptors.request.use((config, data) => {
  // let account
  // if (config.headers.Authorization !== undefined) {
  //   account = localStorage.getItem('account')
  // } else if (config.noAuthButNeedCKS && config.data) {
  //   account = config.data.account
  // }

  // const timestamp = Math.round(Date.now() / 1000)
  // const vendor = window._env_.VENDERID
  // try {
  //   const cks = generateCKS(timestamp, account, vendor)
  //   config.headers.cks = cks
  // } catch (e) {
  //   console.log('debug', e.message, config.url)
  // }

  return config
})

export default function fetcher({
  baseUrl = null,
  url,
  method = 'get',
  data = null,
  params = null,
  extraHeaders = {},
  noAuthButNeedCKS = true,
}) {
  const headers = { ...CUSTOMER_HEADERS, ...extraHeaders }
  const currentUrl = `${baseUrl}${url}`

  return axios({
    headers,
    method,
    url: currentUrl,
    data,
    params,
    noAuthButNeedCKS,
  })
}

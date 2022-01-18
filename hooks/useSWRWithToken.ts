// import { useRecoilState } from 'recoil'
// import useSWR from 'swr'
// import { tokenState } from '@/atoms/tokenState'
// import fetcher from '@/libs/fetcher'
// import { useEffect } from 'react'
// import router from 'next/router'

export default function useSWRWithToken<T>(url: any | string, _fetcher = null, options = null, headers = {}) {
  // const [token, setToken] = useRecoilState<string>(tokenState)
  // const authHeaders = {
  //   Authorization: `Bearer ${token}`,
  // }
  // const extraHeaders = {
  //   ...headers,
  //   ...authHeaders,
  // }
  // const result = useSWR<{ data: { data: T; code: number; msg: string } }>(
  //   token && url ? [url, token] : null,
  //   _fetcher ? _fetcher : (url) => fetcher({ url, extraHeaders }),
  //   options
  // )
  // useEffect(() => {
  //   if (result?.data?.data?.code === 10203 || result?.data?.data?.code === 10204) {
  //     setToken(null)
  //     router.push('/login')
  //   }
  // }, [result, setToken])
  // return result
}

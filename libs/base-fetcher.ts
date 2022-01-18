const fetcher = (url: RequestInfo, options: RequestInit | undefined) => fetch(url, options).then((r) => r.json())

export default fetcher

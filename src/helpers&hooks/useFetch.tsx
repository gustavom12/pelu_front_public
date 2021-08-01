import { useEffect, useState } from "react"
import { get } from "./fetchHelper"

const url = "http://gbsoft.com.ar/apipelu/"

const useFetch = (url: string, options?: any) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchGet = async (endpoint: string, options?: any) => {
      const res = await get(endpoint, options)
      !res.ok
        ? setError(res)
        : setData(res)
      setLoading(false)
    }
    fetchGet(url, options)
  }, [url, options])
  return { data, loading, error }
}

const useReFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const reFetch = async (endpoint: string, options?: any) => {
    setLoading(true)
    const res = await get(endpoint, options)
    !res.ok
      ? setError(res)
      : setData(res)
    setLoading(false)
  }
  return {data, loading, error, reFetch}
}

const useFetchPost = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const post = async (endpoint: string, options?: any) => {
    setLoading(true)
    const res = await get(endpoint, options)
    !res.ok
      ? setError(res)
      : setData(res)
    setLoading(false)
  }
  return {data, loading, error, post}
}

const useFetchPut = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const put = async (endpoint: string, options?: any) => {
    setLoading(true)
    const res = await get(endpoint, options)
    !res.ok
      ? setError(res)
      : setData(res)
    setLoading(false)
  }
  return {data, loading, error, put}
}

const useFetchDelete = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchDelete = async (endpoint: string, options?: any) => {
    setLoading(true)
    const res = await get(endpoint, options)
    !res.ok
      ? setError(res)
      : setData(res)
    setLoading(false)
  }
  return {data, loading, error, fetchDelete}
}

export default useFetch

export {useReFetch, useFetchDelete, useFetchPost, useFetchPut}

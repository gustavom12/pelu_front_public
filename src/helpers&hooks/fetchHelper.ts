const customFetch = (url:string, options:any)=>{
  const defaultHeader = {
    Accept: "application/json"
  }
  const controller = new AbortController();
  options.signal = controller.signal;
  options.method = options.method || "GET";
  // Mix between headers and default headers
  options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader
  //if body, it automatically stringifies it
  options.body = JSON.stringify(options.body) || false
  //if not body, delete it
  if(!options.body) delete options.body
  //if after 4 seg, backends didn't send any response, abort fetch
  setTimeout(()=> controller.abort(), 4000)
  console.log(options.body);
  return fetch(url, options)
    .then(res=>
          res.ok
          ?
            res.json()
          :
            Promise.reject(res)
      )
    .catch(err=>{
      return err.json()
    })
}

const get = (url: string, options:any = {}) => customFetch(url,options)
const post = (url: string, options:any = {}) => {
  options.method = "POST"
  return customFetch(url,options)
}
const put = (url: string, options:any = {}) => {
  options.method = "PUT"
  customFetch(url,options)
}
const del = (url: string, options:any = {}) => {
  options.method = "DELETE"
  customFetch(url,options)
}
export {get, post, put, del}

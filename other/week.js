function jsonp(url,callback){
  let scriptDom = document.createElement('script')
  window.jsonpCallback = (data)=>{
    callback(data)
  }
  scriptDom.src = `${url}?callback=${jsonpCallback}`
  document.body.appendChild(scriptDom)
}
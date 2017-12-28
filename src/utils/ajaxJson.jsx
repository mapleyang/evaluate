import $ from "jquery"
const AjaxJson = {
  /*异步操作*/
  getResponse: (url, data, type) => {
    let promise = new Promise(function(resolve, reject) {
      AjaxJson.Ajax(url, data, type, resolve, reject)
    })
    return promise;
  },
  /*请求操作*/
  Ajax: (url, data, type, resolve, reject) => {
    $.ajax({
      type: type,
      url: url,
      data: data,
      success:function(res){
        let data = JSON.parse(res)
        resolve(data)
      },
      error:function(res){
        // let data = JSON.parse(res)
        // resolve(data)
      }
    });
  },
}

export default AjaxJson;
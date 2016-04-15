var MAX_XHR_WAITING_TIME = 1000 * 60 * 60;// in ms

export var sendAjax = function (params) {
  var xhr = new XMLHttpRequest(),
    url = params.cache ? params.url + '?' + new Date().getTime() : params.url,
    timer = setTimeout(function () {// if xhr won't finish after timeout-> trigger fail
      xhr.abort();
      params.error && params.error();
      params.complete && params.complete();
    }, MAX_XHR_WAITING_TIME);
  xhr.open(params.type, url);
  if (params.headers) {
    let headers = Object.keys(params.headers)
    let header = ''
    let value = ''
    for (let i = 0; i < headers.length; i++) {
      header = headers[i]
      value = params.headers[header]
      xhr.setRequestHeader(header, value)
    }
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      clearTimeout(timer);
      if (xhr.status === 200 || xhr.status === 0) {// 0 when files are loaded locally (e.g., cordova/phonegap app.)
        params.success && params.success(xhr.responseText);
        params.complete && params.complete();
      } else {
        params.error && params.error(xhr.responseText);
        params.complete && params.complete();
      }
    }
  };
  xhr.upload.onprogress = params.progress || (() => undefined)
  params.beforeSend && params.beforeSend(xhr);

  (params.formData)? xhr.send(params.formData): xhr.send();

};

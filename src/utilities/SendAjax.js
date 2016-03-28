var MAX_XHR_WAITING_TIME = 5000;// in ms

var sendAjax = function (params) {
  var xhr = new XMLHttpRequest(),
    url = params.cache ? params.url + '?' + new Date().getTime() : params.url,
    timer = setTimeout(function () {// if xhr won't finish after timeout-> trigger fail
      xhr.abort();
      params.error && params.error();
      params.complete && params.complete();
    }, MAX_XHR_WAITING_TIME);
  xhr.open(params.type, url);
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
  params.beforeSend && params.beforeSend(xhr);
  xhr.send();
};
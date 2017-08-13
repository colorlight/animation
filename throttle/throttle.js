function throttle(fn, interval){
  var allowed = true

  return function() {
    if(allowed){
      fn.apply(this, arguments)
      allowed = false
      setTimeout(() => {allowed  = true}, interval)
    }
  }
}

document.onmousemove = function (e) {
  document.documentElement.style.setProperty('--mouse-x', e.pageX)
  document.documentElement.style.setProperty('--mouse-y', e.pageY)
}

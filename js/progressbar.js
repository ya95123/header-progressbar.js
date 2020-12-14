const progressbar = document.getElementById("h-progressbar")
const bodyHeight = document.body.scrollHeight - window.innerHeight

const detectBar = () => {
  // scrollTop 被頁面捲上去的距離高度
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  let res = scrollTop * 100 / bodyHeight
  progressbar.style.width = `${res}%`
}

window.addEventListener('scroll', detectBar, true)

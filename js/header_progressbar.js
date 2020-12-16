const progressbar = document.getElementById("h-progressbar")

const detectBar = () => {
  const bodyHeight = document.body.scrollHeight - window.innerHeight
  // scrollTop 被頁面捲上去的距離高度
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
  let progress = scrollTop * 100 / bodyHeight
  progressbar.style.width = `${progress}%`
}

window.addEventListener('scroll', detectBar, true)

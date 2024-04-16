document.addEventListener("DOMContentLoaded", function(){

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("back-to-top");
    let progressValue = document.getElementById("back-to-top-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 200) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", ()=>{
      document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#E74C3C ${scrollValue}%, #D7D7D7 ${scrollValue}% )`;
  }
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
})
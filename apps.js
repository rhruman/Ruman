const loading=document.querySelector("#loading")

function myLoading(){
  loading.style.display="none";
}

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector("header").style.padding = "0px 0px";
    document.querySelector("header").style.backgroundColor = "#0E3A50";
    document.querySelector(".top-scroll").style.display = "block";

  } else {
    document.querySelector("header").style.padding = "25px 0px";
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector(".top-scroll").style.display = "none";

  }
}

const menuBarClick = document.querySelector(".fa-bars")
const navbarShow = document.querySelector(".navbar")

menuBarClick.addEventListener("click", function () {
  navbarShow.classList.toggle("menubarShow");
  document.querySelector("header").classList.toggle("bgColor");
  menuBarClick.classList.toggle("fa-times")
})

window.onclick = function (event) {
  if (!event.target.matches('.fa-bars')) {
    document.querySelector(".navbar").classList.remove("menubarShow")
    menuBarClick.classList.remove("fa-times")
  }
}




const topScroll = document.querySelector(".top-scroll")
topScroll.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
})



let options = {
  startAngle: -1.55,
  size: 140,
  value: .95,
  fill: {
    gradient: ["crimson", "#a445ba"]
  },

}

$(".circle .bar").circleProgress(options).on("circle-animation-progress", function (event, progress, stepValue) {
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: .75,
});
$(".jquery .bar").circleProgress({
  value: .70,
});
$(".react .bar").circleProgress({
  value: .55,
});
$(".bootstrap .bar").circleProgress({
  value: .75,
});
$(".wp .bar").circleProgress({
  value: .78,
});
$(".figma .bar").circleProgress({
  value: .65,
});
$(".ps .bar").circleProgress({
  value: .70,
});



const img = document.getElementsByClassName("img");
const target = document.querySelector(".fullImageShow")
const imgShow = document.querySelector(".fullImage")
for (let i = 0; i < img.length; i++) {

  img[i].addEventListener("click", function () {
    target.classList.toggle("imageShow")
    imgShow.src = this.src;
    imgShow.style.display = "block"

  })
}
const closeButton = document.querySelector(".close")
closeButton.onclick = function () {
  target.classList.remove("imageShow");
  imgShow.style.display = "none"

}

const targetMoreButton = document.querySelector(".more-photo");
const showMorePhoto = document.querySelector(".gallery-section-second")
const text = document.querySelector(".btn-more-photo")

targetMoreButton.addEventListener("click", function () {
  showMorePhoto.classList.toggle("showPhoto")

})


function myFunction() {
  const morePhoto = document.querySelector(".btn-more-photo")
  if (morePhoto.innerHTML === "Show More Photos") {
    morePhoto.innerHTML = "Hide Photo";
  } else {
    morePhoto.innerHTML = "Show More Photos";
  }
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var exampleEl = document.getElementById('[data-bs-toggle="tooltip"]')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body
})

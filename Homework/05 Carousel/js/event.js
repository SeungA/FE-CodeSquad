var carousel = document.querySelector(".carousel");
var slideArr = carousel.querySelectorAll(".slide-wrap > ul > li");
var indicatorArr = carousel.querySelectorAll(".indicator-wrap > button");
var indexSlideActive = 0;
var transformArr = [];
var checking = true;

var eventCarousel = {

  addTransformArr : function(element) {
    var value = element.style.transform;
    transformArr.push(value);
  },

  changeIndicator : function(index) {
    var indocatorActive = carousel.querySelector(".active");
    indocatorActive.classList.remove("active")
    indicatorArr[index].classList.add("active");
  },

  clickPrev : function() {
    var firstValue = transformArr.shift();
    transformArr.push(firstValue);

    function changeTransform(element,index) {
      var style = element.style;
      style.transition = "none";
      if(style.transform === "translateX(0px)" || style.transform === "translateX(-600px)") {
        style.transition = "all 0.4s";
      }
      style.transform = transformArr[index];
    }
    slideArr.forEach(changeTransform);
    if(indexSlideActive === 0) indexSlideActive = 4;
    else indexSlideActive = indexSlideActive - 1;
    eventCarousel.changeIndicator(indexSlideActive);
  },


  clickNext : function() {
    var lastValue = transformArr.pop();
    transformArr.unshift(lastValue);

    function changeTransform(element,index) {
      var style = element.style;
      style.transition = "none";
      if(style.transform === "translateX(0px)" || style.transform === "translateX(600px)") {
        style.transition = "all 0.4s";
      }
      style.transform = transformArr[index];
    }
    slideArr.forEach(changeTransform);
    if(indexSlideActive === 4) indexSlideActive = 0;
    else indexSlideActive = indexSlideActive + 1;
    eventCarousel.changeIndicator(indexSlideActive);
  },


  endEvent : function() {
    checking = true;
  },


  startEvent : function(event) {
    if(event.target.tagName !== "BUTTON") return;

    if(!checking) return;
    checking = false;

    slideArr.forEach(eventCarousel.addTransformArr);

    if(event.target.className === "prev") eventCarousel.clickPrev();
    if(event.target.className === "next") eventCarousel.clickNext();
  }

}

carousel.addEventListener("click",eventCarousel.startEvent);
carousel.addEventListener("transitionend",eventCarousel.endEvent);

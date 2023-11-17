let cursor = document.querySelector(".cursor")
let html = document.querySelector("html")

html.addEventListener("mousemove", function(dets) {

  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
  cursor.style.transition = " all 0.3s ease-out";
});
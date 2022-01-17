const tabItems = document.querySelectorAll(".tab-item");

const tabContentItems = document.querySelectorAll(".tab-content-item");

//Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  //Add border to current tab
  this.classList.add("tab-highlight");

  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-highlight"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// var acc = document.getElementsByClassName("accordion");
// var i;
// var len = acc.length;
// for (i = 0; i < len; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var answer = this.nextElementSibling;
//     if (answer.style.maxHeight) {
//       answer.style.maxHeight = null;
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     }
//   });
// }

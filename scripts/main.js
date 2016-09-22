// var currentHour = new Date().getHours();
// var background = document.querySelector('body'); //gets body
// var contentBox = document.querySelectorAll('.overview__content--story');
//
// // currentHour = 6;
// // currentHour = 22;
// console.log(currentHour);
//
// function timeCheck() {
//   if (currentHour > 5 && currentHour < 21){
//     for (var i = 0; i < contentBox.length; i++) {
//       contentBox[i].style.backgroundColor = "#f9f9f9";
//     }
//
//     background.style.color = "#333"
//   }
//   else {
//     for (var i = 0; i < contentBox.length; i++) {
//       contentBox[i].style.backgroundColor = "#333";
//     }
//     background.style.color = "#f9f9f9"
//   }
// }

function openSorting() {
  // var caret = document.querySelector('.sorting button span');

  var sortingButtons =   document.querySelectorAll('.sorting__button');
  var extraSortingButtons = document.querySelectorAll('.sorting__button--extra');

  for (var i = 0; i < sortingButtons.length; i++) {
    sortingButtons[i].addEventListener('click', function(){
      document.querySelector('.sort-option__list').classList.toggle('hide-option__list')
      document.querySelector('.sorting__button span').classList.toggle('caret-rotate')
    })
    extraSortingButtons[i].addEventListener('click', function(){
      document.querySelector('.extra-option__list').classList.toggle('hide-option__list')
      document.querySelector('.sorting__button--extra span').classList.toggle('caret-rotate')
    })
  }
  // document.querySelector('.sorting__button').addEventListener('click', function(){
  //   document.querySelector('.sort-option__list').classList.toggle('hide-option__list')
  //   document.querySelector('.sorting__button span').classList.toggle('caret-rotate')
  // })
  // document.querySelector('.sorting__button--extra').addEventListener('click', function(){
  //   document.querySelector('.extra-option__list').classList.toggle('hide-option__list')
  //   document.querySelector('.sorting__button--extra span').classList.toggle('caret-rotate')
  // })
}

// var defaultInput = document.querySelector('#meest-recent').hasAttribute('checked');
//
// if (!defaultInput == [checked = "checked"]) {
//   document.getElementByTagName('input[value="meest-recent"]').style.color = "#000;"
// }
// var mainSortButtons = document.querySelectorAll('input[name="main-sort"]');
//
// for (var i = 0; i < mainSortButtons.length; i++) {
//   mainSortButtons[i].addEventListener('click', function(){
//     mainSortButtons.setAttribute('checked = "checked"');
//     if (mainSortButtons.hasAttribute('checked = "checked"')) {
//       mainSortButtons.setAttribute('checked = "checked"');
//     }
//   })
// }
//
openSorting();
// timeCheck();

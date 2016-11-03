let currentHour = new Date().getHours();

currentHour = 6;
// currentHour = 22;

console.log("Current hour of day: " + currentHour);

currentHour > 5 && currentHour < 21 ? document.body.classList.remove('nightmode') : document.body.classList.add('nightmode')

let searchButton = document.querySelector('.header__button--search');
let header = document.querySelector('.header');
let searchField = document.querySelector('.search__field')

searchButton.addEventListener('click', function(event) {
  header.classList.toggle('searching');
  //if(event.target !=searchField && event.target.parentNode !=searchField){
  //  header.classList.toggle('searching');
  //}
})

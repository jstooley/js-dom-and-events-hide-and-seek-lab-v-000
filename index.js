function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increasingRankBy(n){
  let selected = document.querySelectorAll('ul.ranked-list li')
  for (i = 0; i < selected.length ; i++ ){
    selected[i].innerHTML = (parseInt(selected[i].innerHTMl) + n)
  }
}

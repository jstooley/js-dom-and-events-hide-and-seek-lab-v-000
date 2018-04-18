function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  let selected = document.querySelectorAll('ranked-list li')
  for (let i = 0; i < selected.length ; i++ ){
    selected[i].innerHTML = (parseInt(selected[i].innerHTMl) + n);
  }
}

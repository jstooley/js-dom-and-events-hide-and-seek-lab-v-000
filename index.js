function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  let selected = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < selected.length ; i++ ){
    selected[i].innerHTML = parseInt(selected[i].innerHTMl) + n;
  }
}
function increaseRankBy(n) {
  var nodes = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n;
  }
}

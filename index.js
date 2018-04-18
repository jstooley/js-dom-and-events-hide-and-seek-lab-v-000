function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < node.length ; i++ ){
    lis[i].innerHTML = parseInt(lis[i].innerHTMl) + n;
  }
}

function increaseRankBy(n) {
    let rankedLis = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < rankedLis.length ; i++) {
        let addN = parseInt(rankedLis[i].textContent) + n;
        rankedLis[i].textContent = addN.toString()
    }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

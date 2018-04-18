function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list');
  nodes.forEach(function(node) {
    e.innerHTML = parseInt(nodee.innerHTML) + n
  })
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

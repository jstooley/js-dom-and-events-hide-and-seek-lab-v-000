function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list');
  nodes.forEach(function(node) {
    node.innerHTML = parseInt(node.innerHTML) + n
  })
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let childNode = node.children[0]

  while (childNode) {
    node = childNode
    childNode = node.children[0]
  }

  return node
}

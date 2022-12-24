// We will do depth first search of DOM and check all nodes and return when we find a node with the given id.

function getElementById(id) {
  function checkId(node) {
    if (node.id === id) {
      return node;
    }
    let res;
    for (let i = 0; i < node.childNodes.length; i++) {
      res = checkId(node.childNodes[i]);
      if (res) {
        return res;
      }
    }
    return null;
  }
  return checkId(document.body);
}

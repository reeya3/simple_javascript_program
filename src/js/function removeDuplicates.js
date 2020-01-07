
    let num = [2,1,2,3,2,1];

function removeDups(num) {
  let unique = {};
  num.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

removeDups(num);
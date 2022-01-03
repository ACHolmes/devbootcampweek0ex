/**
  Implement your own version or Array.reduce()
  The function should take:
    an array: arr
    a function: f
    an initial value: init
  The function should output the new list with only the elements for which f(arr[i]) === true
  Example:
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 0)
    -> 15
    myReduce([12, -3, 6], (accumulator, current) => accumulator + current, 5)
    -> 20
*/

/** Assume the description above is incorrect? Should be reduce is the same as fold in ocaml */

const myReduce = (arr, f, init) => {
  if (arr.length != 0){
    count = f(init, arr[0]);
    return myReduce(arr.slice(1,arr.length), f, count)
  }
  return init
}

module.exports = myReduce

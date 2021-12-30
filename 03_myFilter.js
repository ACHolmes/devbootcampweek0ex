/**
  Implement your own version or Array.filter()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list with only the elements for which f(arr[i]) === true
  Do not use a for loop!
  Example:
    myFilter([1, 3, 4], v => v % 2 === 1)
    -> [1, 3]
*/

const myFilter = (arr, f) => {
  let out = [];
  const helper = (arr, f) => {
    if(arr.length === 0)
    {
      return out
    }
    if(f(arr[0])){
      out.push(arr[0]);
      return helper(arr.slice(1,arr.length), f)
    }
    return helper(arr.slice(1, arr.length), f)
  }
  return helper(arr, f, out)

}

/** For loop solution
  let out = [];
  for (let i = 0; i < arr.length; i++){
    if(f(arr[i])){
      out.push(arr[i])
    }
  }
  return out
 */

module.exports = myFilter

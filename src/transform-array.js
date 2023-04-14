const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
/*   let discardNextBtn = arr.indexOf('--discard-next'); 
  let discardPrevBtn = arr.indexOf('--discard-prev');
  let doubleNextBtn = arr.indexOf('--double-next');
  let doublePrevBtn = arr.indexOf('--double-prev');  */

  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  if(arr.length === 0){
    return [];
  }
/*   let index = arr.indexOf(discardNextBtn);
  console.log(index); */
}



module.exports = {
  transform
};

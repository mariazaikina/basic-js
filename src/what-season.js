const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length) {
    return "Unable to determine the time of year!";
  } else if(!(Date.parse(date))|| date.hasOwnProperty(Symbol.toStringTag)){
    throw Error('Invalid date!');
  }else {
    let season = "";
    let monthIndex = date.getMonth();
    if (monthIndex>= 0 && monthIndex<=1 || monthIndex === 11) {
      season = "winter";
    } else if (monthIndex>= 2 && monthIndex<=4) {
      season = "spring";
    } else if (monthIndex >=5 && monthIndex <=7) {
      season = "summer";
    } else if (monthIndex >= 8 && monthIndex<=10) {
      season = "autumn";
    }
    return season;
  }
}
module.exports = {
  getSeason
};

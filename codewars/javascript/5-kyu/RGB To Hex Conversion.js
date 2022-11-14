// 5 kyu
// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001

// Task description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
// representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range
// must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// Solution 
const getHexValue = (digit) => { 
  return digit.toString(16).toUpperCase()  
}

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

const toHex = (rgbVal) =>{
  if(rgbVal <= 0) {
    return '00';
  }
  
  if(rgbVal >= 255) {
    return 'FF'
  }

  firstHex = parseInt(rgbVal / 16, 10)
  secondHex=(rgbVal / 16 - firstHex) * 16
  
  return getHexValue(firstHex) + getHexValue(secondHex)
  
}



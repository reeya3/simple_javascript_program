function palindrome(str) {
  var reg = /[\W_]/g;
  var lowStr = str.toLowerCase().replace(reg, '');  //remove all the non-alpanumeric char and convert it into lowercase
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowStr;
}
ppalindrome("madam);
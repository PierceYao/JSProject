//检查一个字符串中是否有a或b   a|b === [ab]
var reg1 = /a|b/g;
console.log(reg1.test('aghjhiob'));

//检查一个字符串中是否有字母
var reg2 = /[a-z]/i;
console.log(reg2.test('4153444A456'));

//检查一个字符串中是否有abc或adc或aec
var reg3 = /a[bde]c/;
console.log(reg3.test('afc'));

//[^abc]表示除了abc以外的
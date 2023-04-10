var reg1 = /a{3}/;//正好出现n次
console.log(reg1.test('aaa'));
var reg2 = /ab{3}/;//量词只对他前面一个内容起作用
console.log(reg2.test('abbb'));
var reg3 = /(ab){3}/;
console.log(reg3.test('ababab'));
var reg4 = /ab{3}c/;
console.log(reg4.test('abbbc'));
var reg5 = /ab{1,3}c/;//出现m-n次
console.log(reg5.test('abbc'));
var reg6 = /ab{3,}c/;//出现m次以上
console.log(reg6.test('abbbbbbbc'));
var reg7 = /ab+c/;//至少一个，相当于{1，}
console.log(reg7.test('abbbbbbbc'));
var reg8 = /ab*c/;//0个或多个，相当于{0，}
console.log(reg8.test('ac'));
var reg9 = /ab?c/;//0个或1个，相当于{0,1}
console.log(reg9.test('abbbbbbbc'));

var reg10 = /^a/;//^  表示开头，检查一个字符中是否以a开头
console.log(reg10.test('bcabc'));
var reg11 = /a$/;//$  表示结尾，检查一个字符中是否以a结尾
console.log(reg11.test('bcabca'));
var reg12 = /^a$/;//如果在正则表达式中同时使用^$，则要求字符串必须完全符合正则表达式
console.log(reg12.test('bcabca'));
var reg13 = /^a|a$/;//检查一个字符中是否以a开头或者以a结尾
console.log(reg13.test('bcabca'));

//创建一个正则表达式，用来检查一个字符串是否是一个合法的手机号
var phoneStr = '10567890123';
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));

//创建一个正则表达式，用来检查一个字符串是否含有一个.
//.表示任意字符
var pointReg = /\./g;//\.才表示.
console.log(pointReg.test('ahbv.djy.kjh'));

/*
* \w 任意字母、数字、下划线 [A-z0-9_]
* \W 除了上述，都是 [^A-z0-9_]
* \d 任意数字
* \D 除了数字，都是
* \s 空格
* \S 除了空格
* \b 单词边界，来标识一个独立的单词
* \B 除了单词边界
* */

//创建一个正则表达式，检查一个字符串是否含有单词child
var regChild = /\bchild\b/;
console.log(regChild.test('hello children'));

//去除掉字符串的首尾空格
var str = '      kbhggf  hfdfcv     ';
str = str.replace(/^\s*|\s*$/g, '');
console.log(str);
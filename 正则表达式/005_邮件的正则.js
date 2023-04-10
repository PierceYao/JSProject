var reg = /^([\w\-\.\u4e00-\u9fa5])+@([\w\-\.])+\.([A-z]{2,8})$/i;

var str = '123@qq.com';
var str1 = 'abc_4@sina.com';
var str2 = '1abc_@163.cn';
var str3 = '123-abc@yeah.net';
var str4 = '123_a_b-c@yeah.com.cn';
var str5 = '123_abc@yeah.net';
var str6 = 'abc_123@yeah.com.cn';
var str7 = 'abc_123@yeah.com.net';
var str8 = 'abc_123@yeah.com.123';
var str9 = '_abc_123@yeah.com.123';

console.log(reg.test(str4));
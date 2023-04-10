//split()--将字符串拆分成数组，方法中可以传递一个正则表达式作为参数去拆分
var str1 = '1a2b3c4d5e6f';
var splitArr = str1.split(/[a-z]/i);
for (const key in splitArr) {
    console.log(typeof splitArr[key]);
    console.log(splitArr[key]);
}

//search()--可以搜索字符串中是否含有指定内容，如果搜索到指定内容，返回第一次的索引，如果没有返回-1。
var str2 = 'hello abc adc aec';
var search = str2.search(/a[bde]c/);
console.log(search);//只会查找第一个

//match()--可以根据正则表达式，从一个字符串中将匹配的内容提取出来
var str3 = '1a2b3c4D5e6f';
var match = str3.match(/[a-z]/ig);
console.log(match);

//match()--可以将字符串中指定内容替换为新的内容
var str4 = '1a2b3c4D5e6f';
var replace = str4.replace(/[a-z]/ig, '');
console.log(replace);
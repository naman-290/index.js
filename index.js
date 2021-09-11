// // // // // //
// // // // // // var let const
// // // // // var x = 5;
// // // // // var y = "hello world";
// // // // // // console.log(x);
// // // // // // console.log(y);

// // // // // // this 

// // // // // //console.log(this);

// // // // // function fun(){

// // // // //    // console.log("THis fun runs");
// // // // // } 

// // // // // // fun();


// // // // // function add(a,b){
// // // // //    // console.log(this);
// // // // //     return (a+b);
// // // // // }

// // // // // var temp = {
// // // // //     name : "NAman",
// // // // //     lastName : "Mittal",
// // // // //     fullName() {
// // // // //        // console.log(this.name + this.lastName);
// // // // //     }
// // // // // }

// // // // // temp.fullName();

// // // // // add(2,3);
// // // // // // var c = add(3,5);
// // // // // // console.log(c);
// // // // // var t = 12;
// // // // // var a = () => {
// // // // //     console.log(t);
// // // // //     var x;
// // // // //     x = 'bye!';
// // // // //    // console.log("Arrow head function");
// // // // //     return x;
// // // // // }
// // // // // console.log(x);

// // // // //  g = a();
// // // // // // console.log(g);



// // // // // var arr = ['12','123','222','12'];

// // // // // console.log(arr[3]);

// // // // // var set = new Set();

// // // // // set.add('12');
// // // // // set.add('12332');
// // // // // set.add('12');

// // // // // console.log(set);

// // // // // var a = "hello";
// // // // // a = a + "world";
// // // // // console.log(a);

// // // // // var arr = new Array();

// // // // // console.log(typeof(arr));

// // // // // var map = new Map();

// // // // // map.set('a',12);
// // // // // map.set('b',13);
// // // // // map.set('c',1223);
// // // // // console.log(map);

// // // // // var set = new Set();
// // // // // set.add(12);
// // // // // set.add('12');

// // // // // var arr = new Array();
// // // // // arr.push('12');
// // // // // arr.push(123);
// // // // // arr.push(true);

// // // // // arr = ['12','2']
// // // // // arr.pop()
// // // // // arr.sort();


// // // // // TO -DO 
// // // // // var arr = [23,122,13231,2334];
// // // // // arr.forEach(fun);
// // // // // function fun(){
// // // // //     console.log("hello");
// // // // // }

// // // // // var arr = new Array();
// // // // // arr = [12,120];
// // // // // arr.push(123323)

// // // // // var arr = [[1,2],[12,45],[13,33443]];




// // // // // var d = new Date(2018,11,24,10,33,30,0);
// // // // // console.log(d);




// // // // // MAth

// // // // // var r = Math.random()*20;
// // // // // console.log(r);

// // // // var a = 12;
// // // // if(a>11){
// // // //     console.log("True")
// // // // }
 

// // // // // Array Map set methods Math Date 

// // // var arr = new Array();
// // // arr.push(12);
// // // arr.push(130);
// // // console.log(arr);

// // // var set = new Set();

// // // var map = new Map();
// // // map.set('a',12);
// // // console.log(map);

// // // function fun(){
// // //    console.log(this);
// // // }

// // //fun();
// // var fun = () => {
// //   console.log(this);
// // }

// // fun();





// // try{
 
// // const a = 'wgfwurgfuw';
// // a = 'hefjghkerg';
// // console.log(a); ///error


// // }
// // catch(error){
// //    console.log("Error : " + error);
// // }

// // var z = 736474;
// // "use strict";
// // try{

// //      x = 5;
// //     console.log(x);
// // }
// // catch(error){
// //     console.log("error" + error);
// // }



// // function fun(){
// //     function fun1(){
// //     function fun2(){
// //      console.log("Hello World");
// //     }
// //     fun2();
// //     }
// // fun1();
// // }

// // fun();

// // x = 4
// // console.log(x);

// class person{
//     constructor(first,last,age){
//         this.first = first;
//         this.last = last;
//         this.age = age;
//     }
//     display(){
//         console.log(this.first);
//     }
// }

// var obj = new person("John","Snow",34);
// obj.display();
// var obj2 = new person("hd","dgh",3);
// obj2.display();

// JSON
// {
//     "employee": [
//         {"firstname": "JOhn",
//         "lastname": "Snow"
//     }
//     ]
// }




// JSON map array class OOPS use strict error handling

// try{

//     const a = "bhfbferjk";
//     a = 'jegi' // break
//     console.log(a);
// }
// catch(err){
//    console.log("Error : " + err)
// }
// finally{
//     console.log("Hello World")
// }


// var json = '[{"name": "John","age": 32}]';

// // console.log(str);
// var obj = JSON.parse(json);
// console.log(obj);
// var str = JSON.stringify(obj);
// console.log(str);


// var display = (sum) => {
//     console.log(sum)
// }
// var add = (a,b,fun) => {
//  var c = a+b
// fun(c)
// }
//  add(1,2,display);

// function fun(){
// console.log("Hello")
// }
// setTimeout(fun,3000);
// setInterval(fun,3000)
 

// var promise = new Promise((ifsucees,iferror) => {
//      var x = 1;
//      if(x == 1){
//          ifsucees("Sucess");
//      }
//      else{
//          iferror("Error");
//      }
// })


// promise.then(
//     (value) => {
//         console.log(value);
//     },
//     (value) => {
//         console.log( "Error: " + value)
//     }
// )


// async await

// var fun = async () => {
//     var a = await 'https://google.com';
// }
// fun()

// read write file
// const fs = require('fs')
// fs.readFile('./data.json','utf-8',(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     else
//     console.log(data)
// })

// fs.writeFile('./data1.json',"Hello World",(err) => {
//     if(err)
//     console.log(err);
// })



// var test = require('./test');
// test.fun();

// const fs = require('fs');
// var data = fs.readFileSync('./B4-Task/B4-Task-2.txt',{encoding: 'utf-8'});
// console.log(data)

// const fs = require('fs');
// var readStream = fs.createReadStream('./B4-Task/B4-Task-2.txt');

// readStream.on('open',() => {
//     console.log('Stream open');
// })

// readStream.on('data',(data) => {
//    // console.log(data);
//    var ans = Buffer.from(data).toString();
//    console.log(ans);
// })

// readStream.on('close',() => {
//     console.log("Stream has closed");
// })



// const test = require('./test');
// test.fun();

// const fs = require('fs');

// fs.readFile('./B4-Task/B4-task-2.txt', (err,data) => {
//     console.log(data)
// })

// const chalk = require('chalk');
// const uc = require('upper-case');
// const http = require('http');
// http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type" : 'text/html'});
//    res.write( uc.upperCase("Hello World"));
  
//     console.log(chalk.blue.bgRed.bold('Hello world!'));
//     res.end();
// }).listen(3000)




// const http = require('http');
// const url = require('url');
// const fs = require('fs');
// var form = fs.readFileSync('./index.html','utf-8');
// var server = http.createServer((req,res) => {
//     const link = req.url; 
//     if(link == '/'){
//         res.writeHead(200,{"Content-Type" : 'text/html'});
//         res.write(form);
//         res.end();
//     }
//     else if(link == '/about'){
//         res.writeHead(200,{"Content-Type" : 'text/html'});
//         res.write("You are on about page");
//         res.end();
//     }
//     else if(link == '/profile'){
//         res.writeHead(200,{"Content-Type" : 'text/plain'});
//         res.write("Profile Page");
//         res.end();
//     } else{
//         res.writeHead(404,{"Content-Type" : 'text/html'});
//         res.write("Error wb page not found");
//         res.end();
//     }
// })


// server.listen(3000, () => {
//     console.log("Server listening on 3000");
// })




// const express = require('express');
// const app = express();
// app.get('/',(req,res) => {
//     res.send("Hello World");
// })

// app.get('/about',(req,res) => {
//     res.json({
//         message: 'Welcome to home page'
//     })
// })

// var port = 3000;
// var server = app.listen(port, () => {
//     console.log(`Server is running on ${port}`);

// })
const path = require('path');
var x = path.join(__dirname,'./public');
console.log(x);
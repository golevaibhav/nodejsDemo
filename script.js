// var fs = require('fs');
// fs.readFile('input.txt',function(err,data){
//   if (err)
//   return consolde.error(err);
//   console.log(data.toString());
// });
//
// var data=fs.readFileSync('input.txt');
// var txt=data.toString();
// var arr=[Buffer('Hello '),Buffer('World')]
// console.log(Buffer.concat(arr,[4]).toString());


//Working With Buffer

// arr=new Buffer(10);
// arr.write('Hello')
// console.log(arr.length);
// arr.write('World');
// arr=arr.slice(1,5);
// console.log(arr.toString());
// console.log(arr.length);

// var str="Vaibhav";
// buf=new Buffer(str.length);
// for(var i=0;i<str.length;i++){
//   buf[i]=str.charCodeAt(i);
// }
// console.log(buf.toString());
// var store = [];

socket.on('readable', function() {
  var data = socket.read();
  // allocate for retained data
  var sb = new SlowBuffer(10);
  // copy the data into the new allocation
  data.copy(sb, 0, 0, 10);
  store.push()
  //edited from githum online

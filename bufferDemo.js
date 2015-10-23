buf1 = new Buffer('Vaibhav     ');
buf2 = new Buffer('Gole');
var name=buf2.copy(buf1,7,0,4);
console.log(buf1.toString());

buf3=new Buffer(26);
for(var i=0;i<26;i++){
  buf3[i]=i+97;
}
console.log(buf3.toString());

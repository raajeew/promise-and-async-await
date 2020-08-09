const obj={
    a:1,
    b:2,
    getA(){
       console.log(this.a);
       return this;
    },
    getB(){
        console.log(this.b);
       
    }
}
//obj.getA().getB()

/////////////////
String.prototype.print = function(){
    console.log(this.split('').reverse().join(''));
}
let srt="ra";
srt.print();
Array.prototype.print = function(){
    this.forEach((i)=>{console.log(i)});
}
let arr=[1,2,3];
arr.print()
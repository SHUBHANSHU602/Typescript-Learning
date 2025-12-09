// interface 
interface User {
  name:string;
  email:string;
  password:string;
  gender?:string;
}
//extended interface
interface admin extends User{
  height:number;
}
function shubh(obj:User){

}
shubh({name:"shubhanshu",email:"sadjhds@",password:'dhhuhdfhd'})

function yuv(obj:admin){

}
//FUNCTION IN TYPE-SCRIPT 
function shubham (a:string):String {
return a;
}

console.log(shubham('shubhnahsu'));
// CALL BACK FUNCTION DECLARATION
function hellow (a:number,b:number,cbf:(c:number)=>void){
console.log(a,b,cbf(44))
}
hellow(55,55,(c:number)=>{
  console.log(55+6)
})
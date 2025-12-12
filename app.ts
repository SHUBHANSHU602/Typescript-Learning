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
//type assertion
//it is used to tell ts the type of a variable
// const btn =<HTMLElement>document.getElementById("hey")
// const btn1 =document.getElementById("hey") as HTMLElement
// const bt2n =document.getElementById("hey")!
// sometimes we have specifically mention the particular type like in case of image tage we have to write htmlimagetag,
//with query.selector we can use not null

//type utility



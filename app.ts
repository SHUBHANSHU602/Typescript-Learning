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
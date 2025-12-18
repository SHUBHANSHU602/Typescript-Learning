interface User {
     id: number;
  name: string;
}
type fuc ={
    a:number;
    b:number;

}

let ram :string|number;

const kavi =(input: string | number) => {
    if(typeof input ==='string') 
        console.log('hello')
else{
    return null;
}
}
type obj1={ kind: "circle",
     radius: 55 }
   type obj2={ kind: "square",
     side: 55 }  

     type obj12= obj1 | obj2;

     function area (obj12:obj12){
       if(obj12.kind==="circle"){
            return Math.PI * (obj12.radius)**2;
        }
     
     }
     
     type Admin = { role: string;}
     type User1 = {
         name: string;}
    type Shape  = Admin | User1;
    function add (shape:Shape){
        if ('role' in shape){
          shape.role;
        }
    }
//
type Load={
type:"load";
status:'loading';

}
type Succcess={
    type:'success'
    status:'full'
}
type Person=Load|Succcess

function handle (p:Person){
    if (p.type==='load') {
        p.status
    } else {
        return null;
    }

}
//strict and null

function printName(namie: string | null) {
  if (!namie){
    return'no name'
  }
  
 return namie.toUpperCase();

  }

interface User {
     name: string; 
     age?: number;
     }
interface User {
  name: string;
  age?: number;
}

function printAge(user: User) {
  if (user.age !== undefined) {
    console.log(user.age);
  }
}

//doms
const el = document.getElementById("root");

if (el) {
  el.innerHTML = "Hello";
}

//
async function getMessage():Promise<string> {
    return 'hello shubhanshu'

}

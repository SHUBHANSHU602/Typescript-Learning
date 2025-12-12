// const color:string[] =['green','black','pink','aqua','brown']
// const body =document.querySelector('body')!;
// const btn=document.getElementById('hey') as HTMLButtonElement;
// let index =0;
// btn.addEventListener('click',()=>{
//   body.style.backgroundColor='color[index]';
//   index++;
//   if(index===color.length){
//   index=0;
// }
// })
const color: string[] = ['green', 'black', 'pink', 'aqua', 'brown'];
const body = document.querySelector('body')!;
const btn = document.getElementById('hey') as HTMLButtonElement;

let index:number = 0;

btn.addEventListener('click', () => {
  body.style.backgroundColor = color[index]!;  // FIXED: removed quotes
  index++;

  if (index === color.length) {
    index = 0;
  }
});

// const btn1 = document.getElementById('inc') as HTMLButtonElement;
// const btn2 = document.getElementById('dec') as HTMLButtonElement;


// let num:number=0;
// const head = document.querySelector('h1')!;
// head.innerText=num;
// btn1.addEventListener('click' ()=>{
//   num++;
// })
// btn2.addEventListener('click' ()=>{
//   num--;
// })
const btn1 = document.getElementById('inc') as HTMLButtonElement;
const btn2 = document.getElementById('dec') as HTMLButtonElement;

let num: number = 0;
const head = document.querySelector('h1')!;
head.innerText = num.toString();
 
btn1.addEventListener('click', () => {
  num++;
  if (num===5){
  head.style.backgroundColor='red'
 
}

else{
  head.style.backgroundColor='green'
}
  head.innerText = num.toString();
});

btn2.addEventListener('click', () => {
  num--;
  head.innerText = num.toString();
  
});

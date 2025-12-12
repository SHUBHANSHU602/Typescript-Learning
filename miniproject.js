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
var color = ['green', 'black', 'pink', 'aqua', 'brown'];
var body = document.querySelector('body');
var btn = document.getElementById('hey');
var index = 0;
btn.addEventListener('click', function () {
    body.style.backgroundColor = color[index]; // FIXED: removed quotes
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
var btn1 = document.getElementById('inc');
var btn2 = document.getElementById('dec');
var num = 0;
var head = document.querySelector('h1');
head.innerText = num.toString();
btn1.addEventListener('click', function () {
    num++;
    if (num === 5) {
        head.style.backgroundColor = 'red';
    }
    else {
        head.style.backgroundColor = 'green';
    }
    head.innerText = num.toString();
});
btn2.addEventListener('click', function () {
    num--;
    head.innerText = num.toString();
});

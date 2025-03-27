var num=document.querySelector('#num');
var vnum=document.querySelector('#vnum');
var res=document.querySelector('#res');


num.oninput=()=>{
res.innerHTML="<img src='load.gif' width='200px' height='200px' class='m-auto'>";
setTimeout(()=>{
let tablaHTML="";
vnum.innerHTML=num.value;
let n=parseInt(num.value);
let raiz=Math.sqrt(n);
tablaHTML="<p class='m-auto'>"+"la raiz cuadrada de "+n+" es ="+raiz.toFixed(2)+"</p>";
res.innerHTML=tablaHTML;
},1000);

}
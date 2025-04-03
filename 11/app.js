var peso=document.querySelector('#peso');
var altura=document.querySelector('#altura');
var resultado=document.querySelector('#resultado');

peso.oninput=()=>{calculaimc();}

altura.oninput=()=>{calculaimc();}

const calculaimc = () =>{
    let p=parseFloat(peso.value)
    let a=parseFloat(altura.value)/100;
    document.querySelector('#vpeso').innerHTML=p+"Kg"
    document.querySelector('#valtura').innerHTML=a+"cm"
    let imc=p/(a*a).toFixed(2);
    document.querySelector('#resultado').innerHTML="<img src='load.gif' width='30px' height='30px' class='m-auto'>";
    setTimeout(() => {
      document.querySelector('#resultado').innerHTML=imc.toFixed(2)
      document.querySelectorAll("table .alert").forEach(div => div.classList.remove("destacado"));
      if (imc < 18.5) {
          document.querySelector(".alert-primary").classList.add("destacado");
      } else if (imc >= 18.5 && imc < 24.9) {
          document.querySelector(".alert-secondary").classList.add("destacado");
      } else if (imc >= 25 && imc < 29.9) {
          document.querySelector(".alert-success").classList.add("destacado");
      } else if (imc >= 30 && imc < 34.9) {
          document.querySelector(".alert-danger").classList.add("destacado");
      } else if (imc >= 35 && imc < 39.9) {
          document.querySelector(".alert-warning").classList.add("destacado");
      } else {
        document.querySelector(".alert-info").classList.add("destacado");
      }
},1000);
}

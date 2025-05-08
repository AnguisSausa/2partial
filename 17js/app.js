texto=document.querySelector("#texto");
var traduccion=document.querySelector("#traduccion");

texto.onkeyup=()=>{
    var frase=texto.value
    frase=frase.replaceAll('a', '<b>a</b>f<b>a</b>');
    frase=frase.replaceAll('e', '<c>e</c>f<c>e</c>');
    frase=frase.replaceAll('i', '<s>i</s>f<s>i</s>');
    frase=frase.replaceAll('o', '<o>o</o>f<o>o</o>');
    frase=frase.replaceAll('u', '<t>u</t>f<t>u</t>');
    
    traduccion.innerHTML="<p><h1>"+frase.toUpperCase()+"</h1></p>"

} 

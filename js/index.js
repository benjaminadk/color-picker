//NEED TO FORMAT AND ADD TEXT OF WHAT COLOR IT 

var red = document.getElementById("slider1");
var green = document.getElementById("slider2");
var blue = document.getElementById("slider3");
var alpha = document.getElementById("slider4");

red.addEventListener("input",changeColor,false);
green.addEventListener("input",changeColor,false);
blue.addEventListener("input",changeColor,false);
alpha.addEventListener("input",changeColor,false);

function changeColor(){
  box.style.backgroundColor = "rgba("+red.value+","+green.value+","+blue.value+","+alpha.value+")";
  
 alpha10.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",1)"; 
  
   alpha9.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.9)"; 
  
   alpha8.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.8)";
  
   alpha7.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.7)"; 
  
   alpha6.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.6)"; 
  
   alpha5.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.5)"; 

 alpha4.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.4)"; 
   
  alpha3.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.3)";
  
   alpha2.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.2)"; 
   
  alpha1.style.backgroundColor ="rgba("+red.value+","+green.value+","+blue.value+",.1)"; 

text.innerHTML = "rgba("+red.value+", "+green.value+", "+blue.value+", "+alpha.value+")";

 benPal1.style.backgroundColor = "rgba("+red.value+", "+green.value+", "+blue.value+", "+alpha.value+")";

benPal2.style.backgroundColor = "rgba("+(green.value)+", "+(blue.value)+", "+(red.value)+", "+alpha.value+")";
  
benPal3.style.backgroundColor = "rgba("+blue.value+", "+red.value+", "+green.value+", "+alpha.value+")";
  
benPal4.style.backgroundColor = "rgba("+red.value+", "+blue.value+", "+green.value+", "+alpha.value+")";
  
benPal5.style.backgroundColor = "rgba("+green.value+", "+red.value+", "+blue.value+", "+alpha.value+")";
  
benPal6.style.backgroundColor = "rgba("+blue.value+", "+green.value+", "+red.value+", "+alpha.value+")";
  
benPal7.style.backgroundColor = "rgba("+(255-red.value)+', '+(255-green.value)+', '+(255-blue.value)+','+alpha.value+")";

benPal2Code.innerHTML = document.getElementById("benPal2").style.backgroundColor;
  
benPal3Code.innerHTML = document.getElementById("benPal3").style.backgroundColor;
  
benPal4Code.innerHTML = document.getElementById("benPal4").style.backgroundColor;
  
benPal5Code.innerHTML = document.getElementById("benPal5").style.backgroundColor;
  
benPal6Code.innerHTML = document.getElementById("benPal6").style.backgroundColor;
  
benPal7Code.innerHTML = document.getElementById("benPal7").style.backgroundColor;
}

function showCodes(){
  var bpc = document.getElementsByClassName("bpc");
  [].forEach.call(bpc, function(el){
    el.style.visibility = 'visible';
  });
  console.log(bpc);
}

function copyToClipboard(text){
  window.prompt("Copy to Clipboard: Ctrl+C, Enter",text);
}
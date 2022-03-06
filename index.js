const numberToFind = Math.floor(Math.random() * 101);
var initialNumberOfAttemps = 7; 

document.querySelector("form").addEventListener("submit",(e) => {e.preventDefault();
var $nb = document.querySelector('#nb').value

if (numberToFind < $nb){
  initialNumberOfAttemps--;
  var $paragraph = document.createElement('p');
  $paragraph.innerText = `c'est moins et il te reste ${initialNumberOfAttemps}`;
  document.querySelector(".result").appendChild($paragraph)
  document.querySelector('input').value="";
}
else if(numberToFind > $nb){
    initialNumberOfAttemps--;
    var $paragraph = document.createElement('p');
    $paragraph.innerText =`c'est plus et il te reste ${initialNumberOfAttemps}` ;
    document.querySelector(".result").appendChild($paragraph)
    document.querySelector('#nb').value="";
  
}
else{
    var $paragraph = document.createElement('p');
    $paragraph.innerText ="vous avez trouver";
    document.querySelector(".result").appendChild($paragraph)
}})
if(initialNumberOfAttemps===0){
    var $paragraph = document.createElement('p');
    $paragraph.innerText ="t'es une merde";
    document.querySelector(".result").appendChild($paragraph)
}

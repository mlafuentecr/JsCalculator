(function(e) {
  
 var numberOnScreen;
 var varOperator;
 var equalFunction = false;
 var number1 ='';
 var number2 ='';
 var numTemp = '';
 var total;

  window.addEventListener('mousedown', function(e) {
    let keyTouch = e.target.innerText;
    calculator(keyTouch);
  });

  function calculator(keyTouch){
    let screen = document.getElementById('screen');
    
        //Escriba en la pantallas
        switch(keyTouch) {

          case 'C':
            reset();
            screen.innerHTML ='';
            break;

            case '←':
            
            screen.innerHTML = screen.innerHTML.slice(0, -1);
            break;

            case 'x':
            if(varOperator != '*')
            screen.innerHTML += keyTouch; //mete tecla a la pantalla
            varOperator = '*';
            valoraDatos(numTemp);
            break;

            case '÷':
            if(varOperator != '÷')
            screen.innerHTML += keyTouch; //mete tecla a la pantalla
            varOperator = '÷';
            valoraDatos(numTemp);
            break;

            case '-':
            if(varOperator != '-')
            screen.innerHTML += keyTouch; //mete tecla a la pantalla
            varOperator = '-';
            valoraDatos(numTemp);
            break;

            case '+':
            if(varOperator != '+')
            screen.innerHTML += keyTouch; //mete tecla a la pantalla
            varOperator = '+';
            valoraDatos(numTemp);
            break;

            case '=':
            equalFunction = true;
            valoraDatos(numTemp);
            break;
        
            default:
            numTemp = numTemp + keyTouch;     // creo un numero
            screen.innerHTML += keyTouch;
            console.log('number '+numTemp);
        }


      }


function valoraDatos(numberMandado){

 


  if (numberMandado != '' && number1 == '') {

    number1       = Number(numberMandado);
    total         = number1;
    numberMandado = '';
    numTemp = '';
    console.log('Primer Numero= '+number1+'\n');
  }
  
  if (numberMandado != '' && number1 != '' && number2 == '') {
    
    number2 = Number(numberMandado);
    numTemp = '';
    console.log('Segundo Numero= '+number2+'\n');

  }


  if(number1 != '' && number2 != '' && equalFunction === true){
    console.log('NUMEROS LLENOS \n');
    doMagic();
  }

  

}

 function doMagic(){
  let screen = document.getElementById('screen');

  console.log(number1+ ' number1  number2 '+number2);
  
    if(number1 != '' && number2 != '' ){

          switch(varOperator) {

            case '+':
            total = number1 + number2;
            break;

            case '-':
            total = number1 - number2;
            break;

            
            case '*':
            total = number1 * number2;
            break;

            case '÷':
            total = number1 / number2;
            break;

            case '=':
            screen.innerHTML = total;
            break;

            default:
            console.log('nada');
          
          }
          
          console.log(number1+' '+number2+' '+varOperator +' ya hice operacion = '+total);
          screen.innerHTML = total;
          finish();
      }
     

 }


 function finish(){
  numberOnScreen = '';
  varOperator = '';
  equalFunction = false;
  number1 =total;
  number2 ='';
  numTemp = '';
  total = '';
  console.log('ALL RESET');
}
 


function reset(){
  numberOnScreen = '';
  varOperator = '';
  equalFunction = false;
  number1 ='';
  number2 ='';
  numTemp = '';
  total = '';
  console.log('ALL RESET');
}
 

  
 
})();


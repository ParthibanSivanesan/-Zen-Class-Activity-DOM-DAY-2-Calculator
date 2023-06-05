let firsttemp, firstval, secondval='';
let currentOperator;
let isoperator = false;


document.addEventListener("keypress", (press) =>{
  var name = press.key;
  var code = press.code;
  // console.log(name, code);
 
  if(code.includes("Digit")){
    document.getElementById("result").value += name;
  }else{
    alert(`Only numbers are allowed`);
  }

})



const displayNum = (inp) => {
  document.getElementById("result").value += inp;
  firsttemp = document.getElementById("result").value;
  // console.log("temp",firsttemp);
    if(isoperator){
      secondval += inp;
      // console.log("2nd",secondval);
    }
  return firsttemp, secondval;
}

const displayOperator = (inp) => {
  let presentno = document.getElementById("result").value
  //console.log(presentno.charAt(presentno.length-1));
  let lastcharacter = presentno.charAt(presentno.length-1);
  if(lastcharacter == '+' || lastcharacter == '-' || lastcharacter == '*' ||
     lastcharacter == '/' || lastcharacter == '%' || lastcharacter == '^'){
      alert(`Continuously Two operators are not allowed`);
     

  }else{
    document.getElementById("result").value += inp;
    currentOperator = inp;
    firstval = firsttemp;
    isoperator = true;
    return firstval, currentOperator, isoperator;
  }
  
}

const removelast = () => {
  
  let presentnum = document.getElementById("result").value;
  document.getElementById("result").value = presentnum.slice(0,presentnum.length-1);
  
  if(!isoperator){
    firsttemp = firsttemp.slice(0,firsttemp.length-1);
    firstval = firsttemp;
    return firsttemp, firstval;
  }else if(isoperator && secondval == ''){
    currentOperator = '';
    isoperator = false;
    return currentOperator, isoperator; 
    
  }else{
    secondval = secondval.slice(0,secondval.length-1);
    return secondval;
  }
  
}

const cleardisplay = () => {
  document.getElementById("result").value = '';
  firsttemp = '';
  firstval = '';
  secondval = '';
  return firsttemp, firstval, secondval;
}

const calculate = () => {
  let expression =  document.getElementById("result").value
  let tempexpression = expression.split('');
  let solution;
  // console.log(expression);
  // console.log(tempexpression);


  let countoperator = tempexpression.filter(count =>{
    return count == '+' || count == '-' || count == '*' || count == '/' || count == '%' || count == '^' || count == '(' || count == ')';
  })

  
  // console.log(countoperator);


  if(countoperator.length>1){
    
    if(expression.includes('^')){
      for(var i=0; i<tempexpression.length; i++){
        if(tempexpression[i]== '^'){
          tempexpression[i] = '**';
        }
      }
      // console.log(tempexpression);
      expression = tempexpression.join('');

      // console.log(expression);
      solution = eval(expression);
      document.getElementById("result").value = solution;
    }else{
      solution = eval(expression);
      document.getElementById("result").value = solution;
    }

    document.getElementById("result").value = solution;
    firsttemp = document.getElementById("result").value;
    // console.log("latesttemp", firsttemp);
    isoperator = false;
    secondval = '';
  
    return firsttemp, isoperator, secondval;
    
  }else{
  
  let result = 0;
  let n1 = firstval;
  let n2 = secondval;
  let operator = currentOperator;
  
  // console.log("n1",n1);
  // console.log("n2",n2);
  // console.log("operator",operator);


         
        switch (operator) {
          
          case '(':
            result = parseFloat(n1) * parseFloat(n2);
            break;
          case '/':
            result = parseFloat(n1) / parseFloat(n2);
            break;
          case '*':
            result = parseFloat(n1) * parseFloat(n2);
            break;
          case '+':
            result = parseFloat(n1) + parseFloat(n2);
            break;
          case '-':
            result = parseFloat(n1) - parseFloat(n2);
            break;
          case '%':
            result = parseFloat(n1) % parseFloat(n2);
            break;
          case '^':
            result = parseFloat(n1) ** parseFloat(n2);
            break;


        }
        //  console.log(result);


  // console.log(n1, n2, result);
  document.getElementById("result").value = result;
  firsttemp = document.getElementById("result").value;
  // console.log("latesttemp", firsttemp);
  isoperator = false;
  secondval = '';

  return firsttemp, isoperator, secondval;
  }

  
}


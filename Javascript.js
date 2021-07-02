let total = 0
let symbolChecker = ""
let pointChecker = ""
let plusOrMinChecker = ""
let rootChecker = ""
let percentageChecker = ""



function number0() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("zero").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("zero").innerHTML;}
}

function number1() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("one").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("one").innerHTML;}
}


function number2() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("two").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("two").innerHTML;}
}

function number3() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("three").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("three").innerHTML;}
}


function number4() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("four").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("four").innerHTML;}
}


function number5() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("five").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("five").innerHTML;}
}

function number6() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("six").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("six").innerHTML;}
}


function number7() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("seven").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("seven").innerHTML;}
}

function number8() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("eight").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("eight").innerHTML;}
}

function number9() {
     if ( document.getElementById("equation").innerHTML === "0") 
     { document.getElementById("equation").innerHTML= document.getElementById("nine").innerHTML}
 else if ( document.getElementById("equation").innerHTML === "0." || document.getElementById("equation").innerHTML !== "0") 
 { document.getElementById("equation").innerHTML += document.getElementById("nine").innerHTML;}
}



//The first if checks if the last element of the string is a "*""/""-". If that's the case , they get replaced with a + sign. The second if checks if the last element of the string is a "+""." or an empty string. If that's true nothing will happen if you you press on the + button. In all the other case a "+" will be added to the equation string.

function add ()
  {
  symbolChecker = document.getElementById("equation").innerHTML

  if (symbolChecker[symbolChecker.length-1] === "-" ||symbolChecker[symbolChecker.length-1] === "*"||symbolChecker[symbolChecker.length-1] === "/")
    {
    symbolChecker = symbolChecker.slice(0,symbolChecker.length-1);
    symbolChecker += ("+")
    document.getElementById("equation").innerHTML =  symbolChecker
    }

  else if (symbolChecker[symbolChecker.length-1] === "+"||symbolChecker[symbolChecker.length-1] === "."||symbolChecker==="") 
    {
    
    }

  else 
    {
    document.getElementById("equation").innerHTML =  symbolChecker + "+" 
    }
  }

//The first if checks if the last element of the string is a "+""*""/". If that's the case , they get replaced with a - sign. The second if checks if the last element of the string is a "-""." or an empty string. If that's true nothing will happen if you you press on the - button. In all the other case a "-" will be added to the equation string.

function subtract ()
  {
  symbolChecker = document.getElementById("equation").innerHTML

  if (symbolChecker[symbolChecker.length-1] === "+" ||symbolChecker[symbolChecker.length-1] === "*"||symbolChecker[symbolChecker.length-1] === "/")
    {
    symbolChecker = symbolChecker.slice(0,symbolChecker.length-1);
    symbolChecker += ("-")
    document.getElementById("equation").innerHTML =  symbolChecker
    }

  else if (symbolChecker[symbolChecker.length-1] === "-"||symbolChecker[symbolChecker.length-1] === "."||symbolChecker==="")  
    {
    
    }

  else 
    {
    document.getElementById("equation").innerHTML =  symbolChecker + "-"
    }
  }

//The first if checks if the last element of the string is a "+""-""/". If that's the case , they get replaced with a * sign. The second if checks if the last element of the string is a "*""." or an empty string. If that's true nothing will happen if you you press on the * button. In all the other case a "*" will be added to the equation string.

function multiply () 
  {
  symbolChecker = document.getElementById("equation").innerHTML

  if (symbolChecker[symbolChecker.length-1] === "+" ||symbolChecker[symbolChecker.length-1] === "-"||symbolChecker[symbolChecker.length-1] === "/")
    {
    symbolChecker = symbolChecker.slice(0,symbolChecker.length-1);
    symbolChecker += ("*")
    document.getElementById("equation").innerHTML =  symbolChecker
    }

else if (symbolChecker[symbolChecker.length-1] === "*"||symbolChecker[symbolChecker.length-1] === "."||symbolChecker==="") 
    {
    
    }

  else 
    {
    document.getElementById("equation").innerHTML =  symbolChecker + "*"
    }
  }


//The first if checks if the last element of the string is a "+""-""/". If that's the case , they get replaced with a / sign. The second if checks if the last element of the string is a "/""." or an empty string. If that's true nothing will happen if you you press on the / button. In all the other case a "/" will be added to the equation string.

function divide () 
  {
  symbolChecker = document.getElementById("equation").innerHTML

  if (symbolChecker[symbolChecker.length-1] === "+" ||symbolChecker[symbolChecker.length-1] === "-"||symbolChecker[symbolChecker.length-1] === "*")
    {
    symbolChecker = symbolChecker.slice(0,symbolChecker.length-1);
    symbolChecker += ("/")
    document.getElementById("equation").innerHTML =  symbolChecker
    }

  else if (symbolChecker[symbolChecker.length-1] === "/"||symbolChecker[symbolChecker.length-1] === "."||symbolChecker==="") 
    {
    
    }

  else 
    {
    document.getElementById("equation").innerHTML =  symbolChecker + "/"
    }
  }


//We check if the last element of the equation string isn't a ".".We also check the if the regExPoint7.test is equal true. This is done to make that the last element of the string isn't a math symbol. We then use the regExpoint7.match we declared that only matches numbers starting from the end and take root of that number. 

function root () 
  {
  let regExPoint7 = /[0-9]+[.]?[0-9]*$/
  rootChecker = document.getElementById("equation").innerHTML

  if (rootChecker[rootChecker.length-1] !== "." && regExPoint7.test(rootChecker) === true)
    {
    rootChecker = Math.sqrt(Number(rootChecker.match(regExPoint7)))
    rootChecker= rootChecker.toString()
    document.getElementById("equation").innerHTML = document.getElementById("equation").innerHTML.replace(regExPoint7,rootChecker) 
    }
  }


//We check if the last element of the equation string isn't a ".".We also check the if the regExPoint7.test is equal true. This is done to make that the last element of the string isn't a math symbol. We then use the regExpoint7.match we declared that only matches numbers starting from the end and divide that number by 100. 

function percentage () 
  {
  let regExPoint7 = /[0-9]+[.]?[0-9]*$/
  percentageChecker = document.getElementById("equation").innerHTML

  if (percentageChecker[percentageChecker.length-1] !== "." && regExPoint7.test(percentageChecker) === true)
    {
    percentageChecker = Number(percentageChecker.match(regExPoint7))/100
    percentageChecker= percentageChecker.toString()
    document.getElementById("equation").innerHTML = document.getElementById("equation").innerHTML.replace(regExPoint7,percentageChecker) 
    }
  }


//A lot of potential for refactoring by using regEx.
function plusOrMin() 
  {
  let slicer = ""
  plusOrMinChecker = document.getElementById("equation").innerHTML

// The first 2 if statements check if the equation string has "/-" or "/+". If that's the case we use slice to remove the - sign when we press on the plusOrMin button again (-+- =+/nothing)

  if (plusOrMinChecker.includes("/-")) 
    {
    slicer  += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("/-")+1);
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("/-")+2)
    document.getElementById("equation").innerHTML =  slicer 
    }
  
  else if (plusOrMinChecker.includes("*-")) 
    {
    slicer  += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("*-")+1);
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("*-")+2)
    document.getElementById("equation").innerHTML =  slicer
    }

// Checks if the last element of the equation string is a "*" or "/. If thats the case we just add a "-" symbol after it.

  else if (plusOrMinChecker[plusOrMinChecker.length-1] === "*" || plusOrMinChecker[plusOrMinChecker.length-1] === "/" )
    { 
    document.getElementById("equation").innerHTML += "-" 
    }

//Checks if there is  "*" math sybmol in the equation  string. It also checks if the "*" math sybmol is the last symbol that has been used in the equation string.If both these cases are true we slice the everything starting from the "*" symbol , add a "-" symbol then add everything we sliced at the start back to it.(3*5 => 3- => 3-*5). Note : when we have this : (5*) => the if else statement above us gets used !!! (Same applies to "/")

  else if (plusOrMinChecker.lastIndexOf("*") > 0 && plusOrMinChecker.lastIndexOf("*") > plusOrMinChecker.lastIndexOf("+")&& plusOrMinChecker.lastIndexOf("*") >    plusOrMinChecker.lastIndexOf("-")&& plusOrMinChecker.lastIndexOf("*") > plusOrMinChecker.lastIndexOf("/"))
    {
    slicer  += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("*")+1);
    slicer += ("-")
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("*")+1)
    document.getElementById("equation").innerHTML =  slicer
    }

//Checks if there is  "/" math sybmol in the equation  string. It also checks if the "/" math sybmol is the last symbol that has been used in the equation string.If both these cases are true we slice the everything starting from the "/" symbol , add a "-" symbol then add everything we sliced at the start back to it.(3/5 => 3- => 3-/5). 

  else if (plusOrMinChecker.lastIndexOf("/") > 0 && plusOrMinChecker.lastIndexOf("/") > plusOrMinChecker.lastIndexOf("+")&& plusOrMinChecker.lastIndexOf("/") > plusOrMinChecker.lastIndexOf("-")&& plusOrMinChecker.lastIndexOf("/") > plusOrMinChecker.lastIndexOf("*"))
    {
    slicer  += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("/")+1);
    slicer += ("-")
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("/")+1)
    document.getElementById("equation").innerHTML =  slicer
    }

//Checks if there is  "+" math sybmol in the equation  string. It also checks if the "+" math sybmol is the last symbol that has been used in the equation string.If both these cases are true we slice everything from the "+" symbol including it, add a "-" symbol then add everything we sliced at the start back to it.(5+3 => 5 => 5-3)

  else if (plusOrMinChecker.lastIndexOf("+") > 0 && plusOrMinChecker.lastIndexOf("+") > plusOrMinChecker.lastIndexOf("-")&& plusOrMinChecker.lastIndexOf("+") > 
  plusOrMinChecker.lastIndexOf("*")&& plusOrMinChecker.lastIndexOf("+") > plusOrMinChecker.lastIndexOf("/") )
    {
    slicer += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("+"));
    slicer += ("-")
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("+")+1)
    document.getElementById("equation").innerHTML =  slicer
    }

//Checks if there is  "-" math sybmol in the equation  string. It also checks if the "-" math sybmol is the last symbol that has been used in the equation string.If both these cases are true we slice everything from the "-" symbol including it, add a "+" symbol then add everything we sliced at the start back to it.(5-3 => 5 => 5+3)

  else if (plusOrMinChecker.lastIndexOf("-") > 0 && plusOrMinChecker.lastIndexOf("-") > plusOrMinChecker.lastIndexOf("+")&& plusOrMinChecker.lastIndexOf("-") > plusOrMinChecker.lastIndexOf("*")&& plusOrMinChecker.lastIndexOf("-") > plusOrMinChecker.lastIndexOf("/") )
    {
    slicer  += plusOrMinChecker.slice(0,plusOrMinChecker.lastIndexOf("-"));
    slicer += ("+")
    slicer += plusOrMinChecker.slice(plusOrMinChecker.lastIndexOf("-")+1)
    document.getElementById("equation").innerHTML =  slicer
    }

// Checks if there isn't a single mathsymbol (meaning that there are only numbers in the equation string.). If that's the case we can easily concat a "-" at the start of the equation string.

  else if (plusOrMinChecker.includes("+") === false && plusOrMinChecker.includes("-") === false && plusOrMinChecker.includes("*") === false && plusOrMinChecker.includes("/") === false  ) 
    {
    document.getElementById("equation").innerHTML = "-".concat(plusOrMinChecker)
    }

//The last else if statements (meaning that all the previous if statements requirements haven't been met) checks if the first element of the equation string is a "-".If that's case the "-" just gets removed (-+- =+/(nothing))

  else if (plusOrMinChecker[0] === "-")
    {
    document.getElementById("equation").innerHTML = plusOrMinChecker.slice(1)
    }
  }

//In order to apply order of math operations we have the * and / math operators as the first 2  if/else if statements. Alot of refactoring potential by using better Regex , especially the "+" and "-" math operations.


function equal () 
  {
  let  tempEquation = document.getElementById("equation").innerHTML 
  let regEx = ""
  
  for (let i=0  ;i<10000; i++ ) 
    { 

//Checks if the equation string has includes a "*". If it does we use regEx to extract the number before the "*" symbol , the "*" symbol and the number after the "*" symbol. Those two numbers get multiplied then inserted back into the equation string a string.

    if (tempEquation.includes("*"))
      {
      regEx = tempEquation.match(/[-]?[0-9]+[.]?[0-9]*[*][-]?[0-9]+[.]?[0-9]*/)
      regEx = regEx[0]
      tempEquation = tempEquation.replace(/[-]?[0-9]+[.]?[0-9]*[*][-]?[0-9]+[.]?[0-9]*/,"X")
      total += Number(regEx.slice(0,regEx.indexOf('*')))
      total *= Number(regEx.slice(regEx.indexOf('*')+1))
      total = total.toString()
      tempEquation = tempEquation.replace("X",total)
      total = 0 
      }

//Checks if the equation string has includes a "/". If it does we use regEx to extract the number before the "/" symbol , the "/" symbol and the number after the "/" symbol. Those two numbers get divided then inserted back into the equation string a string.

    else if (tempEquation.includes("/"))
      {
      regEx = tempEquation.match(/[-]?[0-9]+[.]?[0-9]*[/][-]?[0-9]+[.]?[0-9]*/)
      regEx = regEx[0]
      tempEquation = tempEquation.replace(/[-]?[0-9]+[.]?[0-9]*[/][-]?[0-9]+[.]?[0-9]*/,"X")
      total += Number(regEx.slice(0,regEx.indexOf('/')))
      total /= Number(regEx.slice(regEx.indexOf('/')+1))
      total = total.toString()
      tempEquation = tempEquation.replace("X",total)
      total = 0 
      }

//Since we have taken care of the * and / math operations , we will now have to do the + and - math operations. This means we can just solve the equation by going from left to right. The first else if statements checks if the first element is a "-" AND if the equation string has a "+" or a "-" excluding the first element. If that's the case we whave to nested if/if else statments  where we will check if the there comes a "+" or a "-" symbol after the first negative number. Whichever cases get matched the negative number gets extracted , the "-" or "+", and th number after the math operator. Those numbers get added up/subtracted and returned back to the equation string.

    else if (tempEquation[0] === "-" && (tempEquation.includes("+")||tempEquation.slice(1).includes("-"))) 
      {
      if(tempEquation.indexOf("-")< tempEquation.indexOf("+"))
        {
        regEx = (tempEquation.match(/[-][0-9]+[.]?[0-9]*[+][0-9]+[.]?[0-9]*/))
        regEx = regEx[0]
        tempEquation = (tempEquation.replace(/[-][0-9]+[.]?[0-9]*[+][0-9]+[.]?[0-9]*/,""))
        total += Number(regEx.slice(regEx.indexOf('-'),regEx.indexOf('+')))
        total += Number(regEx.slice(regEx.indexOf('+')+1))
        total = total.toString()
        tempEquation = total.concat(tempEquation)
        total = 0     
        }

      else if (tempEquation.indexOf("-")> tempEquation.indexOf("+"))
        {
        regEx = (tempEquation.match(/^[-][0-9]+[.]?[0-9]*[-][0-9]+[.]?[0-9]*/))
        regEx = regEx[0]
        tempEquation = (tempEquation.replace(/^[-][0-9]+[.]?[0-9]*[-][0-9]+[.]?[0-9]*/,""))
        total += Number(regEx.slice(regEx.indexOf('-'),regEx.lastIndexOf('-')))
        total += Number(regEx.slice(regEx.lastIndexOf('-')))
        total = total.toString()
        tempEquation = total.concat(tempEquation)
        total = 0     
        }
      }

//Checks if the equation has a "+" or a "-" excluding the first element. If that's the case we whave to nested if/if else statments  where we will check if we have to add or subtract. Whichever cases get matched the number gets extracted before the "+"or"-" , the "-" or "+", and the number after the "+" or "-". Those numbers get added up/subtracted and returned back to the equation string. Depending where they got extracted from we will have to concat the result before or after the equation string 

    else  if (tempEquation.includes("+") || (tempEquation.includes("-") && tempEquation[0] !== ("-") ))
      {
      regEx = (tempEquation.match(/^[0-9]+[.]?[0-9]*[+][0-9]+[.]?[0-9]*|^[0-9]+[.]?[0-9]*[-][0-9]+[.]?[0-9]*/))
      regEx = regEx[0]
      if (regEx.includes("+") === true)   
        { 
        tempEquation = tempEquation.replace(/^[0-9]+[.]?[0-9]*[+][0-9]+[.]?[0-9]*/, "")    
        total += Number(regEx.slice(regEx.lastIndexOf('+')+1))
        total += Number(regEx.slice(0,regEx.lastIndexOf('+')))
        total = total.toString() 
        if (tempEquation[0]=== "+" ||tempEquation[0]=== "-")
          { 
          tempEquation = total.concat(tempEquation)
          }
        else 
          {
          tempEquation= tempEquation.concat(total)
          }
        total = 0
        }

      else if  (regEx.includes("-") === true) 
        {
        tempEquation = tempEquation.replace(/^[0-9]+[.]?[0-9]*[-][0-9]+[.]?[0-9]*/, "")
        total -= Number(regEx.slice(regEx.lastIndexOf('-')+1))
        total += Number(regEx.slice(0,regEx.lastIndexOf('-')))
        total = total.toString()
        if (tempEquation[0]=== "+" ||tempEquation[0]=== "-" ||tempEquation[0]=== "*")
          { 
          tempEquation = total.concat(tempEquation)
          }
        else 
          {
          tempEquation= tempEquation.concat(total)
          }     
        total = 0
        }
      }

//Don't show a result if the last element is a "."

    else if (tempEquation[tempEquation.length-1]=== ".") 
      {
      break;
      }

//If the equation got solved return the result to the answer div AND the equation div.

    else 
      { 
      document.getElementById("answer").innerHTML = tempEquation
      document.getElementById("equation").innerHTML = tempEquation
      break
      }
    } 
  }


// slices the entire equation string except for the last element.

function backspace () 
  {
  document.getElementById("equation").innerHTML = document.getElementById("equation").innerHTML.slice(0,document.getElementById("equation").innerHTML.length-1)
  }


//First if statement makes sure that "." cant get added if the equation string is empty. The other else if statements makes we can only add a "." after a number and only once after a math operator.

function point () 
  { 
  pointChecker =document.getElementById("equation").innerHTML;
  let regExPoint = /[+][0-9]+$/
  let regExPoint2 = /[-][0-9]+$/
  let regExPoint3 = /[*][0-9]+$/
  let regExPoint4 = /[/][0-9]+$/
  let regExPoint5 = /[0-9]+/

  if (pointChecker.includes("+")=== false && pointChecker.includes("-")=== false && pointChecker.includes("*")=== false && pointChecker.includes("/")=== false && pointChecker.includes(".")=== false &&  regExPoint5.test(pointChecker) === true)
    {
    document.getElementById("equation").innerHTML =  document.getElementById("equation").innerHTML + "."
    }

  else if (regExPoint.test(pointChecker) === true) 
    {
    document.getElementById("equation").innerHTML =  document.getElementById("equation").innerHTML + "."
    }
  else if (regExPoint2.test(pointChecker) === true) 
    { 
    document.getElementById("equation").innerHTML =  document.getElementById("equation").innerHTML + "."
    }

  else if (regExPoint3.test(pointChecker) === true) 
    { 
    document.getElementById("equation").innerHTML =  document.getElementById("equation").innerHTML + "."
    }

  else if (regExPoint4.test(pointChecker) === true) 
    { 
    document.getElementById("equation").innerHTML =  document.getElementById("equation").innerHTML + "."
    }
  }




let memoryChecker = ""
let memoryEquationChecker =""


//Clears memory

function memoryClear () 
  {
  document.getElementById("memory").innerHTML = ""
  document.getElementById("M").innerHTML= ""
  }




function memoryRead () 
  {
  memoryEquationChecker = document.getElementById("equation").innerHTML
  memoryChecker = document.getElementById("memory").innerHTML

//if the equation string is empty , then read the memory.

  if (memoryEquationChecker === "")
    {
    document.getElementById("equation").innerHTML += document.getElementById("memory").innerHTML
    }

//if the last element of the equation string is "*" or "/" then read the memory.

else if (memoryEquationChecker[memoryEquationChecker.length-1] === "*" || memoryEquationChecker[memoryEquationChecker.length-1] === "/")
    { 
    document.getElementById("equation").innerHTML += document.getElementById("memory").innerHTML
    }

//If the number in the memory is positive and the last element of th equation string is a "+" or "-" , then read the memory.

  else if (Number(memoryChecker) >= 0  && (memoryEquationChecker[memoryEquationChecker.length-1] === "+" || memoryEquationChecker[memoryEquationChecker.length-1] === "-"))
    { 
    document.getElementById("equation").innerHTML += document.getElementById("memory").innerHTML
    }

//If the number in the memory is negative and the last element of the equation string is a "+" then replace the "+" with a "-" and read the memory.

  else if (Number(memoryChecker) < 0 && memoryEquationChecker[memoryEquationChecker.length-1] === "+" )
    {
    memoryEquationChecker = memoryEquationChecker.slice(0,memoryEquationChecker.length-1)
    memoryEquationChecker += memoryChecker
    document.getElementById("equation").innerHTML = memoryEquationChecker
    }

//If the number in the memory is negative and the last element of the equation string is a "-" then replace the "-" with a "+" and read the memory.

  else if (Number(memoryChecker) < 0 && memoryEquationChecker[memoryEquationChecker.length-1] === "-" )
    {
    memoryEquationChecker = memoryEquationChecker.slice(0,memoryEquationChecker.length-1)
    memoryChecker = memoryChecker.slice(1)
    memoryEquationChecker += "+"
    memoryEquationChecker += memoryChecker
    document.getElementById("equation").innerHTML = memoryEquationChecker
    }
  }


function memorySave ()
  {
  let regExPoint6 = /[-]?[0-9]+[.]?[0-9]*$/
  memoryEquationChecker = document.getElementById("equation").innerHTML

//If there is only a number in the equation string AND the last element of the equation string isn't a ".", then save it to memory.

  if (memoryEquationChecker.includes("+")=== false && memoryEquationChecker.includes("/")=== false && memoryEquationChecker.includes("*")=== false && memoryEquationChecker.slice(1).includes("-")=== false && memoryEquationChecker[memoryEquationChecker.length-1] !== ".")
    {
    document.getElementById("memory").innerHTML= memoryEquationChecker
    }

//The regEx starts matching from the the end ($ symbol instead of ^) and extracts everything up to a math operator. That number gets saved to memory.

  else if (memoryEquationChecker[memoryEquationChecker.length-1] !== "." && regExPoint6.test(memoryEquationChecker) === true)
    {
    document.getElementById("memory").innerHTML = memoryEquationChecker.match(regExPoint6)
    }

//Adds the "M=" if there is a number in memory.

  if(document.getElementById("memory").innerHTML === "")
    {
    document.getElementById("M").innerHTML= ""
  }

  else 
    {
    document.getElementById("M").innerHTML= "M="
    }
  }


function memoryMin () 
  {
  let regExPoint6 = /[-]?[0-9]+[.]?[0-9]*$/
  memoryEquationChecker = document.getElementById("equation").innerHTML

//If there is only a number in the equation string AND the last element of the equation string isn't a ".", then subtract that number from the memory.

  if (memoryEquationChecker.includes("+")=== false && memoryEquationChecker.includes("/")=== false && memoryEquationChecker.includes("*")=== false && memoryEquationChecker.slice(1).includes("-")=== false && memoryEquationChecker[memoryEquationChecker.length-1] !== ".")
    {
    document.getElementById("memory").innerHTML -= Number(memoryEquationChecker)
    }

//The regEx starts matching from the the end ($ symbol instead of ^) and extracts everything up to a math operator. That number gets subtracted from memory.

  else if (memoryEquationChecker[memoryEquationChecker.length-1] !== "." && regExPoint6.test(memoryEquationChecker) === true)
    {
    document.getElementById("memory").innerHTML -= Number(memoryEquationChecker.match(regExPoint6))
    }

//Adds the "M=" if there is a number in memory.

  if(document.getElementById("memory").innerHTML === "")
    {
    document.getElementById("M").innerHTML= ""
    }

  else 
    {
    document.getElementById("M").innerHTML= "M="
    }
  }


function memoryPlus () 
  {
  let regExPoint6 = /[-]?[0-9]+[.]?[0-9]*$/
  memoryEquationChecker = document.getElementById("equation").innerHTML

//If there is only a number in the equation string AND the last element of the equation string isn't a ".", then add that number up to the memory.

  if (memoryEquationChecker.includes("+")=== false && memoryEquationChecker.includes("/")=== false && memoryEquationChecker.includes("*")=== false && memoryEquationChecker.slice(1).includes("-")=== false && memoryEquationChecker[memoryEquationChecker.length-1] !== ".")
    {
    document.getElementById("memory").innerHTML = Number(memoryEquationChecker) + Number(document.getElementById("memory").innerHTML)
    }

//The regEx starts matching from the the end ($ symbol instead of ^) and extracts everything up to a math operator. That number gets added up to the memory.

  else if (memoryEquationChecker[memoryEquationChecker.length-1] !== "." && regExPoint6.test(memoryEquationChecker) === true)
    {
    document.getElementById("memory").innerHTML = Number(memoryEquationChecker.match(regExPoint6)) + Number(document.getElementById("memory").innerHTML)
    }

//Adds the "M=" if there is a number in memory.

  if(document.getElementById("memory").innerHTML === "")
    {
    document.getElementById("M").innerHTML= ""
    }

  else 
    {
    document.getElementById("M").innerHTML= "M="
    }
  }


//Only clears the equation string.

function clear0 () 
  {
  document.getElementById("equation").innerHTML = "";
  }


//Clears the equation string , the answer and the memory.

function allClear () 
  {
  document.getElementById("equation").innerHTML = "";
  document.getElementById("memory").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("M").innerHTML= ""
  }





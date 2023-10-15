
let tempInputValue = "";
let userWrongPressOperator = false;


const handleClick = (value) => {
  let ref = document.getElementById("display");
  if (value == '.') {
    handleDecimal();
  }
  ref.value += value;
  tempInputValue += value;
  userWrongPressOperator = false;
}


const handleDecimal = (value) => {
  let ref = document.getElementById("display");
  if (!tempInputValue.includes('.')) {
    if (tempInputValue === "") {
      ref.value += "0" + value;
      tempInputValue += "0" + value;
    } else {
      ref.value += value;
      tempInputValue += value;
    }
  }
}

const getOperator = (value) => {
  let ref = document.getElementById("display");

  if ((value === "*" || value === "/" || value === "+") && ref.value === "") {

    ref.value.splice(0, 1);

  }

  if ((value === "+" || value === "-" || value === "*" || value === "/") && (userWrongPressOperator === false)) {
    ref.value += value;
    userWrongPressOperator = true;
    tempInputValue = "";
  } else {
    if (!(value === "+" || value === "-" || value === "*" || value === "/" || value === ".")) {
      console.log("hhh")
      ref.value += value;
      tempInputValue += value;
      userWrongPressOperator = false;
    }
  }
}

const handleClear = () => {
  let ref = document.getElementById("display");
  ref.value = ""
  tempInputValue = ""
}


function customEval(value) {
  let operators = value.match(/[+\-*/]/g);
  let allOperands = value.split(/[+\-*/]/).map((item) => {
    return parseFloat(item);
  })
  let operands = []
  for (let item of allOperands) {
    if (typeof (item) == 'number' && !isNaN(item)) {
      operands.push(item)
    }
  }

  if (value[0] === "-" || value[0] === "+") {
    if (value[0] === "+") {
      operators.splice(0, 1);
    } else {
      operators.splice(0, 1);
      operands[0] = (-1 * operands[0]);
    }
  }


  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "/") {
      operands[i] = operands[i] / operands[i + 1];
      operands.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === "*") {
      operands[i] = operands[i] * operands[i + 1];
      operands.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }

  }

  let ansOfMultiplyAndDivide = operands[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      ansOfMultiplyAndDivide = ansOfMultiplyAndDivide + operands[i + 1];
    } else if (operators[i] === "-") {
      ansOfMultiplyAndDivide = ansOfMultiplyAndDivide - operands[i + 1];
    }
  }
  return ansOfMultiplyAndDivide;
}

const handleResponse = () => {
  // let ref = document.getElementById("display");
  // let ansInput = customEval(ref.value);
  // document.getElementById("display").value = ansInput;

  const ref = document.getElementById("display");
  const ansInput = customEval(ref.value);
  ref.value = ansInput;

}




function ask() {
  let b = 6;
  {
    let a = 5;
  }
  console.log(b)
  console.log(a)
}
ask();

const ask2 = () => {
  let c = 6;
  {
    let d = 5;
  }
  console.log(c)
  console.log(d)
}
ask2();











let calc = (x, y, op) => {
  let result = 0;
  if (op === "+") {
    result = x + y;
  } else if (op === "-") {
    result = x - y;
  } else if (op === "*") {
    result = x * y;
  } else if (op === "/") {
    result = x / y;
  }
  return result;
}

let checkAnswer = (error, answer) => {
  let notice = "";
  if (error === 0) {
    if (answer === 'y') {
      notice = "Hura!";    
    } else {
      notice = "Wrong!";
    }
  } else {
    if (answer === 'y') {
      notice = "Wrong!";
    } else {
      notice = "Hura!";
    }
  }
  return notice;
}
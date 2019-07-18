window.onload = () => {
  let x = Math.floor(Math.random()*10);
  let y = Math.floor(Math.random()*10);
  let arrOp = ["+", "-", "*", "/"];
  let opIndex = Math.floor(Math.random()*arrOp.length);
  let op = arrOp[opIndex];
  let errorArr = [-1, 0, 0, 0, 0, 0, 1];
  let errIndex = Math.floor(Math.random()*errorArr.length);
  let error = errorArr[errIndex];
  
  let result = calc(x, y, op);
  
  let displayResult = result + error;
  console.log(`${x} ${op} ${y} = ${displayResult}`);
  
  let answer = prompt("(Y/N)").toLowerCase();
  let THONGBAO = checkAnswer(error, answer)
  console.log(THONGBAO);
}


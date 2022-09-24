//***Evaluate the expression of a and b depending on what operator is (..see defined function below). */

function calculate(a, b, operator) {
    let evaluation = 0
    if (operator === "+"){
        evaluation = a + b;
        else (operator === "-"){
            evaluation = a - b;
        }
    }
  }
  
  calculate(1,1, "+"); // 2
  calculate(2, 2, '-'); // 0

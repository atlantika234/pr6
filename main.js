// task1
function task1() {
  let a = 10;
  let b = 3;
  let result = a % b;
  console.log(result);
}

// task2
function task2(a, b) {
  if (a % b === 0) {
      console.log(`Ділиться: ${a / b}`);
  } else {
      console.log(`Ділиться з залишком: ${a % b}`);
  }
}

// task3
function task3() {
  let st = Math.pow(2, 10);
  console.log(st);
}

// task4
function task4() {
  let result = Math.sqrt(245);
  console.log(result);
}

// task5
function task5() {
  let arr = [4, 2, 5, 19, 13, 0, 10];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += Math.pow(arr[i], 3);
  }
  let result = Math.sqrt(sum);
  console.log(result);
}

// task6
function task6() {
  let result = Math.sqrt(379);
  console.log(Math.round(result));
  console.log(result.toFixed(1));
  console.log(result.toFixed(2));
}

// task7
function task7() {
  let result = Math.sqrt(587);
  let rounded = {
      floor: Math.floor(result),
      ceil: Math.ceil(result)
  };
  console.log(rounded);
}

// task8
function task8() {
  let numbers = [4, -2, 5, 19, -130, 0, 10];
  console.log(Math.min(...numbers));
  console.log(Math.max(...numbers));
}

// task9
function task9() {
  console.log(Math.floor(Math.random() * 100) + 1);
}

// task10
function task10() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(arr);
}

// task11
function task11(a, b) {
  let result = Math.abs(a - b);
  console.log(result);
}

// task12
function task12(a, b) {
  let c = Math.abs(a - b);
  console.log(c);
}

// task13
function task13(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  let average = sum / arr.length;
  console.log(average);
}

// task14
function task14(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
      factorial *= i;
  }
  console.log(factorial);
}



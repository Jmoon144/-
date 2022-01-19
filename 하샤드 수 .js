//하샤드 수

function solution(x) {
  let sum = 0;
  var arr = String(x).split("");
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += Number(arr[i]);
    // console.log(sum);
  }
  console.log(x % sum === 0 ? true : false);
}

solution(15);

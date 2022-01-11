function solution(x, n) {
  var answer = [];

  for (var i = 0; i < n; i++) {
    a = i + 1;
    answer.push(x * a);
  }

  console.log(answer);
}

solution(4, 3);

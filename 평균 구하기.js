//평균 구하기

function solution(arr) {
  var answer = 0;
  for (a in arr) {
    answer += a;
  }
  console.log(answer / arr.length);
}
solution([1, 2, 3, 4]);

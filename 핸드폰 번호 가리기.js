function solution(phone_number) {
  const a = phone_number.slice(-4);
  const result = a.padStart(phone_number.length, "*");
  console.log(result);
}

solution("01012345678");

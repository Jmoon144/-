function solution(s) {
  const upperS = s.toLowerCase().split("");

  let countA = upperS.filter((a) => "p" === a).length;
  let countB = upperS.filter((a) => "y" === a).length;

  if (countA === countB) {
    // return true;
    console.log("true");
  } else {
    // return false;
    console.log("false");
  }
}
solution("pPoooY");

// 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (var x = 0; x < b; x++) {
    let result = "";
    for (var y = 0; y < a; y++) {
      result += "*";
    }
    console.log(result);
  }
});

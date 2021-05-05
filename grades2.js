function runProgram(input) {
    var grade = input;
    switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Needs a lot of improvement");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Please check your input");
}


}

if (process.env.USERNAME === "ankur") {
    runProgram(`B`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


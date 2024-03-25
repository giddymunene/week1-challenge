function Grade(marks) {
    if (marks > 79) {
      return "A";
    } else if (marks >= 60 && marks <=69) {
      return "B";
    } else if (marks >= 50 && marks<=59){
      return "C";
    } else if (marks >= 40 &&marks <=49) {
      return "D";
    } else (marks < 40)
    {
      return "E";
    }
  }
console.log(Grade(5))
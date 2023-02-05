let today = new Date();

let bar = today.getDay();

switch (bar) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Mon");
    break;
  case 2:
    console.log("Today is Tue");
    break;
  case 3:
    console.log("Today is Wed");
    break;
  case 4:
    console.log("Today is Thu");
    break;
  case 5:
    console.log("Today is Fri");
    break;

  default:
    console.log("Today is Sat");
}

// if (bar == 0) {
//   console.log("Today is Sunday");
// } else if (bar == 1) {
//   console.log("Today is Monday");
// } else if (bar == 2) {
//   console.log("Today is Tuesday");
// } else if (bar == 3) {
//   console.log("Today is Wednesday");
// } else if (bar == 4) {
//   console.log("Today is Thrusday");
// } else if (bar == 5) {
//   console.log("Today is Friday");
// } else {
//   console.log("Today is Saturday");
// }

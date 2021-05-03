/* If the number is between 6 and 10 (both inclusive), then output The number is between 6 and 10
If the number is greater than 5, then output The number is greater than 5
If the number is less than or equal to 12, then output The number is less than or equal to 12
If the number is divisible by 7, then output The number is divisible by 7 */
var number = 7;
if (number >= 6 && number <= 10) {
    console.log("The number is between 6 and 10");
}
if (number > 5) {
    console.log("The number is greater than 5");
}
if (number <= 12) {
    console.log("The number is less than or equal to 12");
}
if (number % 7 == 0) {
    console.log("The number is divisible by 7 ");
}
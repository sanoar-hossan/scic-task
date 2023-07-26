//Task-1:
function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  // Test the function
  let inputStr = "hello world";
  let outputStr = reverseString(inputStr);
  console.log(outputStr);

  //TAsk-2:
//Task-1:
function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  // Test Purpose
  let inputStr = "hello world";
  let outputStr = reverseString(inputStr);
  console.log(outputStr);

  //Task-2:
  function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[i] > 0) {
        sum += numbersArray[i];
      }
    }
    return sum;
  }
  
  //  Test Purpose
  let inputArray = [2, -5, 10, -3, 7];
  let outputSum = sumOfPositiveNumbers(inputArray);
  console.log(outputSum);

  //Task-3:

  function findMostFrequentElement(inputArray) {
    let frequency = {};
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentElement = inputArray[i];
      frequency[currentElement] = (frequency[currentElement] || 0) + 1;
  
      if (frequency[currentElement] > maxFrequency) {
        maxFrequency = frequency[currentElement];
        mostFrequentElement = currentElement;
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test Purpose
  let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  let result = findMostFrequentElement(arr);
  console.log(result); 


  //Task-4:
  function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator";
    }
  }
  
  //  Test Purpose
  let number1 = 10;
  let number2 = 5;
  let operation = '+';
  console.log(calculate(number1, operation, number2)); 
  
  //Task-5:
  function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}[]";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  //  Test Purpose
  const passwordLength = 12; 
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);

  //Task-6:

  function romanToInt(romanNumeral) {
    const romanValues = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentChar = romanNumeral[i];
      const nextChar = romanNumeral[i + 1];
  
      if (romanValues[currentChar] < romanValues[nextChar]) {
        result -= romanValues[currentChar];
      } else {
        result += romanValues[currentChar];
      }
    }
  
    return result;
  }
  
  // Test Purpose
  const romanNumeral1 = "IX";
  const romanNumeral2 = "XXI";
  
  console.log(romanToInt(romanNumeral1)); 
  console.log(romanToInt(romanNumeral2)); 

  
  //Task-7:
  function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "No second smallest element found in the array";
    }
  
    return secondSmallest;
  }
  
  //  Test Purpose
  const numbersArray = [5, 2, 10, 1, 8, 3];
  console.log(findSecondSmallest(numbersArray)); 
  
  
  
  
  
  
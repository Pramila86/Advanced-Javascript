//1. Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)

//using callback function
function sumOfFirst4(callback) {
  let sum = 0;
  for (let i = 1; i <= 4; i++) {
    sum += i;
  }

  return sum;
}
console.log("The sum of first 4 natural numbers is: ", sumOfFirst4());

//using promises
function sumOfFirst4() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (i = 1; i <= 4; i++) {
      sum += i;
    }
    resolve(sum);
  });
}

sumOfFirst4()
  .then((result) => {
    console.log("The sum of first 4 natural numbers is: " + result);
  })
  .catch((error) => {
    console.error("an error occured" + error);
  });

//using async/await
function sumOfFirst4() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
      sum += i;
    }
    resolve(sum);
  });
}

async function calculateSum() {
  try {
    const result = await sumOfFirst4();
    console.log("The sum of first 4 natural numbers is: " + result);
  } catch (error) {
    console.error("An error occured " + error);
  }
}

calculateSum();

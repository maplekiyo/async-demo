// index.js

// Asynchronous function using Promises
function fetchDataFromAPI() {
  console.log(new Date().toISOString(), 'Begin fetchDataFromAPI()');
  return new Promise((resolve, reject) => {
    console.log(new Date().toISOString(), 'In Promise');
    // Simulating an asynchronous API call
    setTimeout(() => {
      console.log(new Date().toISOString(), 'In setTimeout');
      const data = { message: 'Hello from the API!' };
      resolve(data);
    }, 2000);
  });
}

// Asynchronous function using async/await
async function processData() {
  try {
    console.log(new Date().toISOString(), 'Calling fetchDataFromAPI()');
    const data = await fetchDataFromAPI();
    console.log(new Date().toISOString(), 'Called fetchDataFromAPI()');
    console.log(data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Calling the asynchronous function
console.log(new Date().toISOString(), 'Calling processData()');
processData();
console.log(new Date().toISOString(), 'Called processData()');

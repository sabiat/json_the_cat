const request = require('request');

const breed = process.argv.splice(2)[0];

// console.log(breed);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (body === '[]') {
    console.log('The requested breed is not found');
    process.exit();
  }
  if (error) {
    console.log(`Error: ${error}`);
    process.exit();
  }
  const data = JSON.parse(body);
  // console.log(body); // Print the entire response body sent back from API server
  // console.log(typeof body);
  // converts the string into object so we can scan it
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description); //Will print out description from the data object
});


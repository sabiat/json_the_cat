const request = require('request');

const breed = process.argv.splice(2)[0];

// console.log(breed);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (body === '[]') {
    console.log('The requested breed is not found');
    process.exit()
  }
  // console.log(body); // Print the entire response body sent back from API server
  // console.log(typeof body);
   // converts the string into object so we can scan it
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
});


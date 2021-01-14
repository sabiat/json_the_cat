const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.splice(2)[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc.length === 0) {
    console.log('Requested breed is not found');
  } else {
    console.log(desc);
  }
});
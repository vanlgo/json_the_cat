const request = require("request");

const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log(`${input} not found`);
  } else if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(data[0].description);
  }

});
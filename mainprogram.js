const axios = require('axios');
const fs = require('fs');

async function main() {
  try {
    const genre = 'fiction';
    
    // Call the microservice endpoint
    const response = await axios.get(`http://localhost:3008/fetch-books?genre=${genre}`);
    console.log('Microservice Response:', response.data);

    const fileContent = fs.readFileSync('filteredBooks.txt', 'utf8');
  } catch (error) {
    console.error('Error in main program:', error.message);
  }
}

// Run the main program
main();

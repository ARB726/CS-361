const express = require('express');
const fs = require('fs');
const books = require('./books.json'); // books.json file
const app = express();

const PORT = 3008;

app.get('/fetch-books', (req, res) => {
  const genre = req.query.genre;

  // Filter the books by genre
  let filteredBooks;
  if (!genre || genre.toLowerCase() === 'all') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter(book => 
      book.category.toLowerCase() === genre.toLowerCase()
    );
  }

  // Convert filteredBooks to a readable string
  const outputData = JSON.stringify(filteredBooks, null, 2);

  // Write the filtered data to a text file
  fs.writeFile('filteredBooks.txt', outputData, err => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error writing to file');
    }
    console.log('Data successfully written to filteredBooks.txt');
    return res.send(`Data successfully written to filteredBooks.txt. Found ${filteredBooks.length} book(s).`);
  });
});

app.listen(PORT, () => {
  console.log(`Microservice is running on port ${PORT}`);
});

# CS-361
This is a repository for CS 361 (software engineering 1) for winter 2025.

Read Me for Assignment 8 
This microservice fetches and filters book data based on genre from a books.json file. It writes the filtered results to filteredBooks.txt and responds with a JSON confirmation message.
How to Programmatically Request Data
HTTP Method: GET
Endpoint: /fetch-books
Query Parameter: genre (optional)
If genre is omitted or set to all, all books are returned/written.
If genre is specified (e.g., fiction), only books matching that genre are returned/written.


How to Programmatically Receive Data
When the request is successful, the microservice:

Reads and filters books.json based on the specified genre.
Writes the filtered results to filteredBooks.txt.
Returns a JSON response confirming the operation, e.g.: "Data successfully written to filteredBooks.txt. Found X book(s)."


UML Sequence Diagram
Below is the UML sequence diagram illustrating how the Main Program requests data and how the Microservice processes and returns that data.
![image](https://github.com/user-attachments/assets/20e99dd7-3bff-4191-bb8d-473d811c33e3)
Main Program calls GET /fetch-books?genre=<genre>.
Microservice reads books.json from the file system.
Microservice filters the data and writes filteredBooks.txt.
Microservice sends a JSON response to the Main Program confirming success.

Additional Notes
If no books match the requested genre, filteredBooks.txt will contain an empty array, and the response will indicate Found 0 book(s).
Make sure books.json is in the same directory as your microservice code.
If you change the default port or host, let your teammate know.



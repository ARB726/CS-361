# CS-361
This is a repository for CS 361 (software engineering 1) for winter 2025.

Read Me for Assignment 8 
This microservice fetches and filters book data based on genre from a books.json file. It writes the filtered results to filteredBooks.txt and responds with a JSON confirmation message.


1. How to Programmatically Request Data

1.1 HTTP Method & Endpoint

Method: GET

Endpoint: /fetch-books

Query Parameter: genre (optional)

The request must use the GET method, and the endpoint should be structured as:

**GET /fetch-books?genre=<genre_name>**
where <genre_name> is the name of the book genre you want to filter.


1.2 Correct Query Parameter Usage

The genre parameter should be:
✅ Lowercase✅ A valid string that matches a genre in books.json✅ Properly URL-encoded if it contains spaces or special characters

For example, if you want to search for Science Fiction, the correctly formatted request should be:

**GET /fetch-books?genre=science%20fiction**
 Note: The space in "Science Fiction" is URL-encoded as %20.
 
 1.3 Examples of Well-Formatted Requests
**Retrieve all books (no filtering):**
GET /fetch-books  OR  GET /fetch-books?genre=all
**Retrieve fiction books**
GET /fetch-books?genre=fiction
**Retrieve mystery books**
GET /fetch-books?genre=mystery
**Retrieve romance books**
GET /fetch-books?genre=romance
**Retrieve science fiction books**
GET /fetch-books?genre=science%20fiction

1.4 Handling Case Sensitivity

The microservice is not case-sensitive for genre names, meaning these two requests are treated the same:
✅ GET /fetch-books?genre=romance✅ GET /fetch-books?genre=RomanceHowever, it's best practice to use lowercase genre names to avoid inconsistencies.

1.5 How to Send Requests in Different Ways

1.5.1 Using a Web Browser

If you're testing the microservice, you can enter the request URL directly into your browser's address bar.

Example:
**  http://localhost:5000/fetch-books?genre=fiction**
Browser-Friendly: Only works for GET requests, since browsers cannot send POST, PUT, or DELETE requests directly.

1.5.2 Using curl (Command Line)

You can also use curl in the command line to test the microservice.

Example Request:

**curl -X GET "http://localhost:5000/fetch-books?genre=fiction"**
🔹 Use Case: Ideal for testing API responses in a terminal.

1.5.3 Using Postman (Recommended for API Testing)

Open Postman.

Set the request type to GET.

Enter the request URL:
**http://localhost:5000/fetch-books?genre=fiction**
Click Send to receive the response.
🔹 Benefit: Postman provides an easy-to-read response format.


2. How to Programmatically Receive Data

When the request is successful, the microservice:

Reads and filters books.json based on the specified genre.

Writes the filtered results to filteredBooks.txt.

Returns a JSON response confirming the operation, e.g.:

**{
  "message": "Data successfully written to filteredBooks.txt. Found X book(s)."
}**

🔹 If no books match the requested genre, filteredBooks.txt will contain an empty array, and the response will indicate Found 0 book(s).🔹 Make sure books.json is in the same directory as your microservice code.🔹 If you change the default port or host, let your teammate know.


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



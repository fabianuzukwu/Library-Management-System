# Library Management System

## I. Project Overview

The Library Management System is a Group 3 project built with Node.js and Express.js to manage books, authors, availability, and borrowing records. It follows MVC architecture and provides CRUD endpoints for book management.

## II. Book Fields

i. `bookName`: String

ii. `authors`: String

iii. `isAvailable`: Boolean

iv. `borrowingRecord`: Number

## III. Database

The project uses `database.json`, located in the `model` folder, as a makeshift database for storing book records.

## IV. How to Run the Project

i. Clone the repository (git bash):

```bash
git clone https://github.com/fabianuzukwu/Library-Management-System.git
```

ii. Open the folder with your text editor

iii. Install all dependencies (in your text editor terminal):

```bash
npm install
```

iv. Start the server using the script configured in `package.json`:

```bash
npm run dev
```

The server runs locally on port `3000`.

## V. Testing the Endpoints

Use Postman or thunder client(a vs code extention) to test the CRUD endpoints. When running locally, use `localhost:3000` as the base URL.

### i. Create a Book

**Method:** POST

**Endpoint:** `localhost:3000/newbook`

**Request Body (JSON):**

```json
{
  "bookName": "Things Fall Apart",
  "authors": "Chinua Achebe",
  "isAvailable": true,
  "borrowingRecord": 2
}
```

### ii. Get All Books

**Method:** GET

**Endpoint:** `localhost:3000/allbooks`

No request body is required.

### iii. Get a Single Book

**Method:** GET

**Endpoint:** `localhost:3000/onebook/:id`

Replace `:id` with the ID of an existing book. No request body is required.

### iv. Update a Book

**Method:** PATCH

**Endpoint:** `localhost:3000/updatebook/:id`

**Request Body (JSON):**

```json
{
  "bookName": "Things Fall Apart",
  "authors": "Chinua Achebe",
  "isAvailable": false,
  "borrowingRecord": 3
}
```

Replace `:id` with the ID of the book you want to update.

### v. Delete a Book

**Method:** DELETE

**Endpoint:** `localhost:3000/deletebook/:id`

Replace `:id` with the ID of the book you want to delete. No request body is required.

## VI. Testing the Logger Middleware

i. Start the server.

ii. Send a request to any endpoint using Postman.

iii. check the terminal to see the log and also check logs.txt. 

## VII. Group 3 Team Members

i. **Name:** Uzukwu Ifechukwu Fabian -- **Github Username:** fabianuzukwu

ii. **Name:** Joseph Ichekanu -- **Github Username:** ichekanujoseph359-alt

iii. **Name:** Chikaodi Agubosim -- **Github Username:** chikodiagubosim053

iv. **Name:** Ohamadike Chidubem Perez -- **Github Username:** ohamadikepc

// TODO: Changed file

import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("BookblazeDB"); // select database

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return books;
}

// Get book by id
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
      // TODO: errorhandling
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return book;
}

// create book
// Example book object:
/*
{
  book_name: "To Kill a Mockingbird",
  book_author: "Harper Lee",
  book_genre: "Fiction"
}
*/
async function addBook(book) {
  book.book_cover = "/images/no_cover_available.png"; // default cover image
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update book
// Example book object:
/*
{
  _id: "6630e72c95e12055f661ff13",
  book_name: "To Kill a Mockingbird",
  book_author: "Harper Lee",
  book_genre: "Fiction",
  cover: "/images/Mockingbird.png",
  readlist: true
}
*/
// returns: id of the updated book or null, if book could not be updated
async function updateBook(book) {
  try {
    let id = book._id;
    delete book._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: book });

    if (result.matchedCount === 0) {
      console.log("No book with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Book with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete book by id
// returns: id of the deleted book or null, if book could not be deleted
async function deleteBook(id) {
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("Book with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files


async function getLists() {
  const collection = db.collection("lists");
  const lists = await collection.find({}).toArray();
  lists.forEach(list => {
    list._id = list._id.toString();
  });
  return lists;
}

async function addList(name, books = []) {
  const collection = db.collection("lists");
  const result = await collection.insertOne({ name, books });
  return result.insertedId.toString();
}

async function getList(id) {
  const collection = db.collection("lists");
  const list = await collection.findOne({ _id: new ObjectId(id) });
  if (list) list._id = list._id.toString();
  return list;
}
async function deleteList(id) {
  try {
    const collection = db.collection("lists");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export default { getLists, addList, getList, deleteList, addBook, updateBook, getBooks, getBook, deleteBook };


import { MongoClient, ObjectId } from "mongodb"; 
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("BookblazeDB"); 
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");

    
    const query = {};

    
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); 
    });
  } catch (error) {
    console.log(error);
    
  }
  return books;
}


async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; 
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
      
    } else {
      book._id = book._id.toString(); 
    }
  } catch (error) {
    
    console.log(error.message);
  }
  return book;
}


async function addBook(book) {
  book.book_cover = "/images/no_cover_available.png"; 
  try {
    const collection = db.collection("books");
    const result = await collection.insertOne(book);
    return result.insertedId.toString(); 
  } catch (error) {
    
    console.log(error.message);
  }
  return null;
}


async function updateBook(book) {
  try {
    let id = book._id;
    delete book._id; 
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: book });

    if (result.matchedCount === 0) {
      console.log("No book with id " + id);
      
    } else {
      console.log("Book with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    
    console.log(error.message);
  }
  return null;
}


async function deleteBook(id) {
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; 
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No book with id " + id);
    } else {
      console.log("Book with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    
    console.log(error.message);
  }
  return null;
}




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
async function updateList(list) {
  try {
    const collection = db.collection("lists");
    
    const result = await collection.updateOne(
      { _id: new ObjectId(list._id) },
      { $set: { name: list.name, books: list.books } }
    );
    return result.modifiedCount === 1;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

export default { getLists, addList, getList, deleteList, updateList, addBook, updateBook, getBooks, getBook, deleteBook };
import db from "$lib/db.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const book = await db.getBook(params.book_id);
  if (!book) {
    throw error(404, "Book not found");
  }
  return { book };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const author = formData.get("author");
    const genre = formData.get("genre");

    await db.updateBook({
      _id: id,
      book_name: name,
      book_author: author,
      book_genre: genre
    });
    
    
    return { success: true, message: "Book updated successfully." };
  }
};
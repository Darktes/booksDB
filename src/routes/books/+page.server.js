import { getBooks } from "$lib/db.js";

export async function load() {
  const books = await getBooks();
  return { books };
}

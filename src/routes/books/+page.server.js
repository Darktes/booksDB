

import db from "$lib/db";

export async function load() {
  return {
    books: await db.getBooks()
  };
}



import db from "$lib/db";

export async function load() {
  return {
    books: await db.getBooks(),
    lists: await db.getLists()
  };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("list-name");
    const bookIds = data.getAll("books");

    
    const books = await Promise.all(
      bookIds.map(id => db.getBook(id))
    );

    

    await db.addList(name, books);
    return { success: true };
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    await db.deleteList(id);
    return { success: true };
  }
};
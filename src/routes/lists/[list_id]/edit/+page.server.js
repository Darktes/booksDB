import db from '$lib/db';

export async function load({ params }) {
  const list = await db.getList(params.list_id);
  const books = await db.getBooks();
  return { list, books };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const bookIds = formData.getAll("books");
    
    // Update the database record. Make sure you have a function updateList in your db.js.
    await db.updateList({ _id: id, name, books: bookIds });
    
    return { success: true, message: "List updated" };
  }
};
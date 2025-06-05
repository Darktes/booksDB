

import db from '$lib/db.js';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name');
    const author = data.get('author');
    const genre = data.get('genre');

    await db.addBook({
      book_name: name,
      book_author: author,
      book_genre: genre
    });
    
    return { success: true };
  }
};

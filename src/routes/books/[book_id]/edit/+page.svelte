<script>
  let { data } = $props();
</script>



<h1>Edit Book</h1>

<form method="POST">
  <div class="mb-3">
    <label class="form-label" for="book-name">Book Name</label>
    <input
      id="book-name"
      name="name"
      class="form-control"
      type="text"
      value={data.book.book_name}
      required
    />
  </div>
  <div class="mb-3">
    <label class="form-label" for="author">Author</label>
    <input
      id="author"
      name="author"
      class="form-control"
      type="text"
      value={data.book.book_author}
      required
    />
  </div>
  <div class="mb-3">
    <label class="form-label" for="genre">Genre</label>
    <input
      id="genre"
      name="genre"
      class="form-control"
      type="text"
      value={data.book.book_genre}
      required
    />
  </div>
  <input type="hidden" name="id" value={data.book._id} />
  <button type="submit" class="btn btn-primary">Save Changes</button>

  <a href={`/books/${data.book._id}`} class="btn btn-secondary ms-2">Cancel</a>
</form>



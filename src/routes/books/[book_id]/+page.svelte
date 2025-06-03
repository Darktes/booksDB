<script>
  export let data;
  let book = data.book;
</script>

<a href="/books">Back</a>

<h1>{book.book_name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={book.book_cover} alt="Cover of {book.book_name}" />
  </div>

  <div class="col">
    <p>Autor: {book.book_author}</p>
    <p>Genre: {book.book_genre}</p>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={book._id} />
      <button class="btn btn-danger">Delete Book</button>
    </form>
  </div>
</div>

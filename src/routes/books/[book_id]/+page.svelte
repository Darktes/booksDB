<script>
  let { data } = $props();
</script>

<a href="/books">Back to all books</a>

<h1>{data.book.book_name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={data.book.book_cover} alt="Cover of {data.book.book_name}" />
  </div>

  <div class="col">
    <p>Author: {data.book.book_author}</p>
    <p>Genre: {data.book.book_genre}</p>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={data.book._id} />
      <button class="btn btn-danger">Delete Book</button>
    </form>
  </div>
</div>

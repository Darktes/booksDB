<script>
  let { book } = $props();
</script>

<div class="book-card">
  <div>
    <img class="img-fluid" src={book.book_cover} alt="Cover of {book.book_name}" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/books/" + book._id}>{book.book_name}</a>
    </div>
    <div>
      Autor: {book.book_author}
    </div>
    <div>
      Genre: {book.book_genre}
    </div>
  </div>
</div>

<style>
  .book-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>

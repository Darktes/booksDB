<script>
  let { data } = $props();
</script>

<a href="/books" class="btn btn-secondary mb-3">Back</a>

<h1>{data.book.book_name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img
      class="img-fluid"
      src={data.book.book_cover}
      alt="Cover of {data.book.book_name}"
    />
  </div>

  <div class="col">
    <p><strong>Author:</strong> {data.book.book_author}</p>
    <p><strong>Genre:</strong> {data.book.book_genre}</p>

    
    <p>
      <strong>Description:</strong>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
      lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
      elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod
      non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
      non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque
      vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat
      libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
      in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
      sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
      Maecenas adipiscing ante non diam sodales hendrerit. ullamcorper velit.
    </p>
    <p>
      <strong>Published Date:</strong>
      January 1, 2022
    </p>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={data.book._id} />
      <button class="btn btn-danger">Delete Book</button>
      <a href={`/books/${data.book._id}/edit`} class="btn btn-secondary ms-2">
        Edit Book
      </a>
    </form>
  </div>
</div>

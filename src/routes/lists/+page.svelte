<!-- // TODO: Changed file -->
<script>
  let { form, data } = $props();
</script>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">List Name</label>
    <input name="list-name" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Books</label>
    <select
      name="books"
      class="form-select"
      multiple
      aria-label="Multiple select example"
      size="10"
    >
      {#each data.books as book}
        <option value={book._id}>{book.book_name}</option>
      {/each}
    </select>
  </div>
  <div>
    <button type="submit" class="btn btn-secondary w-100">Add new list</button>
  </div>
  <br>

  <h1>My Lists</h1>
</form>

<br>
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
  {#each data.lists as list}
    <div class="col">
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{list.name}</h5>
          <br>
          <div class="mt-auto">
            <a href={`/lists/${list._id}`} class="btn btn-primary btn-sm me-2">
              View / Edit
            </a>
            <form method="POST" action="?/delete" class="d-inline">
              <input type="hidden" name="id" value={list._id} />
              <button type="submit" class="btn btn-danger btn-sm">
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
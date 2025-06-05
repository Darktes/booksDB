<script>
  let { form, data } = $props();
</script>

<a href="/lists" class="btn btn-secondary mb-3">Back</a>

<h1>Edit List</h1>

<form method="POST" use:enhance>
  <div class="mb-3">
    <label class="form-label" for="list-name">List Name</label>
    <input
      id="list-name"
      name="name"
      class="form-control"
      type="text"
      value={data.list.name}
      required
    />
  </div>
  <div class="mb-3">
    <label class="form-label" for="books-select">Books</label>
    <select id="books-select" name="books" class="form-select" multiple size="10">
      {#each data.books as book}
        <option
          value={book._id}
          selected={data.list.books.includes(book._id)}
        >
          {book.book_name}
        </option>
      {/each}
    </select>
  </div>
  <input type="hidden" name="id" value={data.list._id} />
  <button type="submit" class="btn btn-primary">Save Changes</button>
  <a href={`/lists/${data.list._id}`} class="btn btn-secondary ms-2">Cancel</a>
</form>

{#if form?.success}
  <p class="text-success mt-3">{form.message}</p>
{/if}
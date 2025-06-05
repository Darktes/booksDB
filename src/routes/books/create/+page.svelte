<script>
  import { enhance } from '$app/forms';
  let { form } = $props();
</script>

<a href="/books" class="btn btn-secondary mb-3">Back</a>
<h1>Add Book</h1>
<form method="POST" use:enhance>
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Author</label>
    <input name="author" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Genre</label>
    <input name="genre" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add Book</button>
</form>

{#if form?.success}
  <p>Book saved</p>
{/if}

<script>
  import BookCard from "$lib/components/BookCard.svelte";
  let { data } = $props();
</script>

<h1>Books</h1>
<br>
<div>
  <a href="/books/create" class="btn btn-primary w-100">Add new Book</a>
</div>
<div class="row mt-3">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard {book} />
    </div>
  {/each}
</div>
<br>
<p><i>Daten und Bilder generiert mit ChatGPT</i></p>

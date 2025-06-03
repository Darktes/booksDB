<script>
  import BookCard from "$lib/components/MovieCard.svelte";
  let { data } = $props();
</script>

<p><i>Daten und Bilder generiert mit ChatGPT</i></p>
<div>
  <a href="/books/create" class="btn btn-primary">Add new Book</a>
</div>
<div class="row mt-3">
  {#each data.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard {book} />
    </div>
  {/each}
</div>

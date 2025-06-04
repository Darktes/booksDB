<!-- TODO: Changed file -->
<script>
  import BookCard from "$lib/components/BookCard.svelte";
  let { data } = $props();
</script>

<h1>{data.list.name}</h1>
<div class="row mt-3">
  {#each data.list.books as book}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <BookCard {book} />
    </div>
  {/each}
</div>
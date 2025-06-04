<!-- src/lib/components/BookCard.svelte -->
<script>
  export let book;
</script>

<!--
  We use a Bootstrap “card” with:
    • bg-secondary → grey background
    • text-white   → white text
    • h-100        → forces the card to fill its parent’s height (if you’re in a Bootstrap grid)
-->
<div class="card bg-secondary text-black h-100">
  {#if book.book_cover}
    <!--
      .card-img-top + .img-fluid makes the image scale to 100% of the card’s width,
      preserving its aspect ratio. 
    -->
    <img
      src={book.book_cover}
      class="card-img-top img-fluid"
      alt="Cover of {book.book_name}" />
  {/if}

  <div class="card-body">
    <!--
      card-title inside a card-body; link stays white because of text-white class.
    -->
    <h5 class="card-title">
      <a href={"/books/" + book._id} class="text-white">
        {book.book_name}
      </a>
    </h5>

    <p class="card-text mb-1">
      Author: {book.book_author}
    </p>
    <p class="card-text">
      Genre: {book.book_genre}
    </p>
  </div>
</div>

<style>
  /* Ensure the <img> never overflows the card’s width (this is redundant with .img-fluid,
     but you can leave it for safety). */
  .card-img-top {
    max-width: 100%;
    height: auto;
  }
</style>

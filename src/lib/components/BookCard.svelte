<script>
  let { book } = $props();
</script>

<div class="card runes-mode big-card">
  {#if book.book_cover}
    <a href={"/books/" + book._id}>
      <img
        src={book.book_cover}
        class="card-img-top img-fluid"
        alt="Cover of {book.book_name}" />
    </a>
  {/if}

  <div class="card-body">
    <h5 class="card-title">
      <a href={"/books/" + book._id} class="text-runes">
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
  
  .big-card {
    width: 100%;
    border-radius: 2rem;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    min-height: 450px;
  }

  
  .big-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  
  .runes-mode {
    background: #2e2b2b;
    color: #f5deb3;
    border: 2px solid #000000;
    border-radius: 2rem;
    background-size: cover;
    background-blend-mode: multiply;
    font-family: Arial, sans-serif;
  }

  .runes-mode .card-body {
    background: rgba(0, 0, 0, 0.5);
  }

  .text-runes {
    color: #f5deb3;
    text-shadow: 1px 1px 2px #000;
  }

  
  .card-img-top {
    width: 100%;
    height: 500px; 
    object-fit: cover;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  .card-title a {
  text-decoration: none !important;
  font-weight: bold;
}
</style>



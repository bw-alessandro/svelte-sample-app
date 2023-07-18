<script lang="ts">
  import Book from "./book.svelte";
  import Button from "./button.svelte";
  import Purchase from "./purchase.svelte";
  import { addBook, bookStore, type BookRecord } from "./stores/book.store";

  let title = "";
  let price = 0;
  let description = "";

  let books: BookRecord[] = [];
  let purchases = [];

  $: books = $bookStore;

  function setTitle(event) {
    title = event.target.value;
  }

  function handleAdd() {
    const newBook: BookRecord = {
      title: title,
      price: price,
      description: description,
    };
    addBook(newBook);
  }

  function purchaseBook(event) {
    const selectedTitle = event.detail;
    purchases = purchases.concat({
      ...books.find((book) => book.title === selectedTitle),
    });
  }
</script>

<h1>Book Store</h1>

<section>
  <h2>Add New Book</h2>
  <div>
    <label for="title">Title</label>
    <input type="text" id="title" value={title} on:input={setTitle} />
  </div>

  <div>
    <label for="price"> Price</label>
    <input type="number" id="price" bind:value={price} />
  </div>

  <div>
    <label for="description">Description</label>
    <textarea rows="3" id="description" bind:value={description} />
  </div>

  <Button on:click={handleAdd}>ADD Book</Button>
</section>

<section>
  <h2>Stock</h2>
  {#if books.length === 0}
    <p>No books in stock.</p>
  {:else}
    {#each books as book}
      <Book
        bookTitle={book.title}
        bookPrice={book.price}
        bookDescription={book.description}
        on:buy={purchaseBook}
      />
    {/each}
  {/if}
</section>

<section>
  <Purchase books={purchases} />
</section>

<style>
  h1 {
    color: purple;
    text-align: center;
  }

  section {
    margin: 1rem auto;
    width: 30rem;
  }

  label,
  input,
  textarea {
    width: 100%;
  }
</style>

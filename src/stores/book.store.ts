import { writable, type Writable } from "svelte/store";
import { postBook } from "./book.service";

export type BookRecord = {
  title: string;
  price: number;
  description: string;
};
export const bookStore: Writable<BookRecord[]> = writable([]);

export async function addBook(book: BookRecord) {
  const newBook = await postBook(book);
  bookStore.update((books) => {
    return [...books, newBook];
  });
}

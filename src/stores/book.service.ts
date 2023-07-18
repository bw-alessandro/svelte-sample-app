import { type BookRecord } from "./book.store";

export function postBook(book: BookRecord): Promise<BookRecord> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(book), 500);
  });
}

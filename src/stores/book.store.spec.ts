import { addBook } from "./book.store";

describe("book.store", () => {
  describe("addBook", () => {
    it("can call addBook", async () => {
      await addBook({ title: "Test", description: "Book", price: 5 });
    });
  });
});

import React from "react";
import BookItem from "./BookItem";
import NoBook from "./NoBook";
export default function BookGrid({ books, favouriteToggle }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            favouriteToggle={favouriteToggle}
          />
        ))
      ) : (
        <NoBook />
      )}
    </div>
  );
}

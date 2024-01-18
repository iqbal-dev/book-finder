import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import BookGrid from "./book/BookGrid";
import { useState } from "react";

function App() {
  const initBooks = [
    {
      id: crypto.randomUUID(),
      name: "Broken Wings",
      author: "Sarojini Naidu",
      price: "89",
      rating: "4",
      is_favourite: false,
      published: 2009,
    },
    {
      id: crypto.randomUUID(),
      name: "Circle of Reason ",
      author: "Amitav Ghosh",
      price: "108",
      rating: "2",
      is_favourite: false,
      published: 1997,
    },
    {
      id: crypto.randomUUID(),
      name: "Death of a City",
      author: "Amrita Pritam",
      price: "50",
      rating: "5",
      is_favourite: false,
      published: 2007,
    },
    {
      id: crypto.randomUUID(),
      name: "Revolution 2020",
      author: "Chetan Bhagat",
      price: "70",
      rating: "3",
      is_favourite: false,
      published: 1994,
    },
    {
      id: crypto.randomUUID(),
      name: "Naked Triangle",
      author: "Balwant Gargi",
      price: "135",
      rating: "5",
      is_favourite: false,
      published: 2008,
    },
    {
      id: crypto.randomUUID(),
      name: "A Million Mutinies Now ",
      author: "V.S. Naipaul",
      price: "68",
      rating: "2",
      is_favourite: false,
      published: 1999,
    },
    {
      id: crypto.randomUUID(),
      name: "A Bend in the River ",
      author: "V.S. Naipaul",
      price: "139",
      rating: "2",
      is_favourite: false,
      published: 1995,
    },
    {
      id: crypto.randomUUID(),
      name: "A Brush with Life ",
      author: "Satish Gujral",
      price: "154",
      rating: "2",
      is_favourite: false,
      published: 2004,
    },
    {
      id: crypto.randomUUID(),
      name: "A Passage to England ",
      author: "Nirad C. Chaudhuri",
      price: "44",
      rating: "2",
      is_favourite: false,
      published: 2009,
    },
    {
      id: crypto.randomUUID(),
      name: "A House for Mr. Biswas ",
      author: "V.S. Naipaul",
      price: "82",
      rating: "3",
      is_favourite: false,
      published: 2006,
    },
    {
      id: crypto.randomUUID(),
      name: "A Prisoner’s Scrapbook ",
      author: "L.K. Advani",
      price: "109",
      rating: "2",
      is_favourite: false,
      published: 2000,
    },
    {
      id: crypto.randomUUID(),
      name: "Last Burden",
      author: "Upamanyu Chatterjee",
      price: "90",
      rating: "3",
      is_favourite: false,
      published: 2010,
    },
    {
      id: crypto.randomUUID(),
      name: "A Call to Honour ",
      author: "Jaswant Singh",
      price: "125",
      rating: "5",
      is_favourite: false,
      published: 2005,
    },
    {
      id: crypto.randomUUID(),
      name: "A Sense of Time ",
      author: "H.S. Vatsyayan",
      price: "174",
      rating: "3",
      is_favourite: false,
      published: 1993,
    },
    {
      id: crypto.randomUUID(),
      name: "A Strange and Sublime Address",
      author: "Amit Chaudhuri",
      price: "136",
      rating: "4",
      is_favourite: false,
      published: 2006,
    },
    {
      id: crypto.randomUUID(),
      name: "A Bunch of Old Letter ",
      author: "Jawaharlal Nehru",
      price: "116",
      rating: "3",
      is_favourite: false,
      published: 1992,
    },
    {
      id: crypto.randomUUID(),
      name: "A Suitable Boy ",
      author: "Vikram Seth",
      price: "68",
      rating: "4",
      is_favourite: false,
      published: 2004,
    },
    {
      id: crypto.randomUUID(),
      name: "A Village by the Sea ",
      author: "Anita Desai",
      price: "199",
      rating: "3",
      is_favourite: false,
      published: 1993,
    },
    {
      id: crypto.randomUUID(),
      name: "Agnibeena",
      author: "Kazi Nazrul Islam",
      price: "170",
      rating: "3",
      is_favourite: false,
      published: 1995,
    },
  ];
  const [books, setBooks] = useState(initBooks);
  function onSearch(text) {
    const filtered = initBooks.filter((book) =>
      book.name.toLowerCase().includes(text.toLowerCase())
    );
    setBooks([...filtered]);
  }
  function assendingTextSort(array, field) {
    return array.sort((a, b) => {
      const nameA = a[field].toLowerCase();
      const nameB = b[field].toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  function dessendingTextSort(array, field) {
    return array.sort((a, b) => {
      const nameA = a[field].toLowerCase();
      const nameB = b[field].toLowerCase();

      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
  function filterHandler(e) {
    const sortBy = e.target.value;
    let sorted = [];
    if (sortBy === "true") {
      sorted = initBooks;
    }
    if (sortBy === "name_asc") {
      sorted = assendingTextSort([...books], "name");
    }
    if (sortBy === "name_desc") {
      sorted = dessendingTextSort([...books], "name");
    }
    if (sortBy === "year_asc") {
      sorted = [...books].sort((a, b) => a.published - b.published);
    }
    if (sortBy === "year_desc") {
      sorted = [...books].sort((a, b) => b.published - a.published);
    }

    setBooks(sorted);
  }

  function favouriteToggle(book) {
    const bookIndex = books.findIndex((bookInd) => book.id === bookInd.id);
    const newBooks = [...books];
    newBooks[bookIndex].is_favourite = !newBooks[bookIndex].is_favourite;
    setBooks(newBooks);
  }
  return (
    <>
      <Nav />
      <main className="my-10 lg:my-14">
        <Header onSearch={onSearch} filterHandler={filterHandler} />
        <BookGrid books={books} favouriteToggle={favouriteToggle} />
      </main>

      <Footer />
    </>
  );
}

export default App;

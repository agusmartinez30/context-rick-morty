// deps
import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [results, setResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const URL = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    Axios.get(URL).then((response) => {
      console.log(response.data);
      const { count, next, prev, pages } = response.data.info;
      const { results } = response.data;
      setCharacters(results);
      setPages(pages);
      setNextPage(next);
      setPrevPage(prev);
      setResults(count);
    });
  }, []);

  const goToPage = (page, e) => {
    const type = e.target.dataset.type;

    switch (type) {
      case "prev":
        setActualPage(actualPage - 1);
        break;
      case "next":
        setActualPage(actualPage + 1);
        break;
      case "goTo":
        const number = Number(e.target.value);
        page = `${URL}?page=${number}`;

        setActualPage(number);
        break;
      case "search":
        const temp = e.target.value;
        console.log(temp);
        page = `${URL}?name=${temp}`;

        break;
      default:
        return;
    }
   
    Axios.get(page).then((response) => {
      const { results, info } = response.data;
      setCharacters(results);
      setPrevPage(info.prev);
      setNextPage(info.next);
      setResults(info.count);
      setPages(info.pages);
    });
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        results,
        nextPage,
        prevPage,
        pages,
        goToPage,
        actualPage,
        setActualPage,
        URL,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchResults = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchResults, updateSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

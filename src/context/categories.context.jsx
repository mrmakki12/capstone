import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils";

// value to access
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// provider
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    // fetch Categories here
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

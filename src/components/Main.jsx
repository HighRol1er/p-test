import { useCallback } from "react";
import lodashWrapper from "../lib/LodashWrapper";

const Main = () => {
  const handleSearch = useCallback(
    lodashWrapper.debounce((searchTerm) => {
      console.log("Searching for : ", searchTerm);
    }, 500),
    []
  );

  return;
};

export default Main;

import React, { createContext, PropsWithChildren, useState, useContext } from "react";
import { Country } from "../models/Country";

type IContext = {
  filterData: Country[] | null;
  setFilterData: (countries: Country[] | null) => void;
};

export const MyContext = createContext<IContext>({
  filterData: null,
  setFilterData: () => {},
});

export const useCountryContext = () => useContext(MyContext);

export const CountryProvider: React.FC<PropsWithChildren<object | undefined>> = ({ children }) => {
  const [filterData, setFilterData] = useState<Country[] | null>(null);

  const contextValue: IContext = {
    filterData,
    setFilterData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default CountryProvider;


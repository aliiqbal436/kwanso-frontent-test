import { createContext, useContext } from "react";
import useApiWithPaginationAndFilters, {
  ApiWithPaginationAndFiltersHook,
} from "../hooks/useApiCall";

interface ApiContextProps extends ApiWithPaginationAndFiltersHook {}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider = ({ children }: {children: string | JSX.Element | JSX.Element[]}) => {
  const apiHook = useApiWithPaginationAndFilters();

  return <ApiContext.Provider value={apiHook}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }

  return context;
};

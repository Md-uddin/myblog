import { createContext, useState } from "react";

type useContextProviderProps = {
  children: React.ReactNode;
};
type UseContextType = {
  sidebarLinks: sidebarLinks;
  setSidebarLinks: React.Dispatch<React.SetStateAction<sidebarLinks>>;
};
type linkType = { link: string; label: string; order: number };
type sidebarLinks = linkType[] | null;

//simple method
// export const UseContext = createContext<UseContextType | null>(null);
//with type assertion
export const UseContext = createContext({} as UseContextType);

export const UseContextProvider = ({ children }: useContextProviderProps) => {
  const [sidebarLinks, setSidebarLinks] = useState<sidebarLinks | null>(null);
  return (
    <UseContext.Provider value={{ sidebarLinks, setSidebarLinks }}>
      {children}
    </UseContext.Provider>
  );
};

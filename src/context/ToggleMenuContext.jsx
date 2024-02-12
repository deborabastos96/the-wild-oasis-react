import { createContext, useContext, useState } from "react";

const ToggleMenuContext = createContext();

function ToggleMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(() => !isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <ToggleMenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, toggleMenu, closeMenu }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
}

function useToggleMenu() {
  const context = useContext(ToggleMenuContext);
  if (context === undefined)
    throw new Error("ToggleMenuContext was used outside of ToggleMenuProvider");
  return context;
}

export { ToggleMenuProvider, useToggleMenu };

import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favorites';

export function FavoritesProvider({ children }) {
  const [favorites, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const { favorites, setFavorite } = useContext(FavoritesContext);

  function addFav(newFav) {
    const hasFav = favorites.some((item) => item.id === newFav.id);
    if (!hasFav) {
      setFavorite((prevFav) => [...prevFav, newFav]);
    }
  }

  function delFav(delFav) {
    setFavorite(favorites.filter((favorite) => favorite.id !== delFav.id));
  }

  return { favorites, addFav, delFav };
}

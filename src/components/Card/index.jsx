import styles from './Card.module.css';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useFavoritesContext } from 'contexts/useFavoritesContext';
import { Link } from 'react-router-dom';

function Card({ id, title, img, isFav }) {
  const [fav, setFav] = useState(isFav);
  const { addFav, delFav } = useFavoritesContext();

  function handleFav() {
    setFav(fav === 'unfav' ? 'fav' : 'unfav');
  }

  return (
    <div className={styles.card}>
      <Link to={`/${id}`}>
        <img src={img} />
        <h2>{title}</h2>
      </Link>
      <IconContext.Provider value={{ className: styles.icons }}>
        {fav === 'unfav' ? (
          <HiOutlineHeart
            onClick={() => (handleFav(), addFav({ id, title, img }))}
          />
        ) : (
          <HiHeart onClick={() => (handleFav(), delFav({ id, title, img }))} />
        )}
      </IconContext.Provider>
    </div>
  );
}

export default Card;

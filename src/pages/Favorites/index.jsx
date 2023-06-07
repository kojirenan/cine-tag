import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoritesContext } from 'contexts/useFavoritesContext';

function Favorites() {
  const { favorites } = useFavoritesContext();
  return (
    <>
      <Banner />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorites.map((favorite) => (
          <Card {...favorite} key={favorite.id} isFav={'fav'} />
        ))}
      </section>
    </>
  );
}

export default Favorites;

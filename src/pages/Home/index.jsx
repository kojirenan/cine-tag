import Card from 'components/Card';
import Title from 'components/Title';
import videos from 'json/db.json';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Title>
        <h1>Um lugar para guardar seus filmes preferidos</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} isFav={'unfav'} />
        ))}
      </section>
    </>
  );
}

export default Home;

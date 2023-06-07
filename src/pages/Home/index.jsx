import Card from 'components/Card';
import Title from 'components/Title';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/kojirenan/api-video/videos')
      .then((resp) => resp.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

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

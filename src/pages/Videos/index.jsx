import { useParams } from 'react-router-dom';
import styles from './Videos.module.css';
import videos from 'json/db.json';

function Videos() {
  const params = useParams();
  const video = videos.find((video) => video.id === Number(params.id));

  return (
    <section className={styles.section}>
      <iframe
        width="560"
        height="315"
        src={video.link}
        title={video.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default Videos;

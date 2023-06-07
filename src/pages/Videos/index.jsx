import { useParams } from 'react-router-dom';
import styles from './Videos.module.css';
import { useEffect, useState } from 'react';

function Videos() {
  const [video, setVideo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/kojirenan/api-video/videos?id=${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideo(...data);
      });
  }, []);

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

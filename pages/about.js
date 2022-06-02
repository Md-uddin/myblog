import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">
            <a className="back-btn">
              &larr; Go to homepage Back and restart to see wheather the hot
              reload is working
            </a>
          </Link>
        </p>
      </main>
    </div>
  );
}
// docker run -e CHOKIDAR_USEPOLLING=true 
// -v ${pwd}\pages:/app/pages -d -p 3000:3000 --name react-app base-image
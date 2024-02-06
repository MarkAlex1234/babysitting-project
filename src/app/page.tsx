import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our Babysitting Community!</h1>
      </header>
    </div>
  );
}

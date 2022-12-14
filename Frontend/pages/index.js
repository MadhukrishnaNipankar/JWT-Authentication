import Head from "next/head";
import styles from "../styles/Home.module.css";
import LoginTesting from "../components/LoginTesting";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeveloperUs.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginTesting />
      <p>
        Note: Custom authentication with email and password is also implemented
        at backend side. Please refer routes directory to know more about the
        same
      </p>
    </div>
  );
}

"use client";
import styles from "./home.module.scss";
import IllustrationAB from "../components/Svg";

export default function Home() {
  return (
    <>
      <IllustrationAB style={{ marginTop: "-2rem" }} />

      <div className={styles.presentation}>
        <p className={styles.name}>
          <span>Aurélie</span>
          <span>Bernard</span>
        </p>
        <p>Développeuse intégratrice web</p>
        <p>Créative, polyvalente et passionnée</p>
      </div>
    </>
  );
}

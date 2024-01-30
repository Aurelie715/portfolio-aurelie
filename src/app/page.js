"use client";
import styles from "./home.module.scss";
import IllustrationAB from "../components/Svg";
import PageNavigation from "../components/PageNavigation";

export default function Home() {
  return (
    <>
      <section className="page-container">
        <IllustrationAB style={{ marginTop: "-2rem" }} />

        <div className={styles.presentation}>
          <p className={styles.name}>
            <span className={styles["first-name"]}>Aurélie</span>
            <span>Bernard</span>
          </p>
          <p>Développeuse intégratrice web</p>
          <p>Créative, polyvalente et passionnée</p>
        </div>
      </section>

      <PageNavigation />
    </>
  );
}

"use client"
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid-area-content">
      <div className={styles["home-grid"]}>
        <div className={styles.image}>
          {/* <IllustrationAB /> */}
        </div>
        <div className={styles.name}>
          <p>Aurélie</p>
          <p>Bernard</p>
        </div>
      </div>
    </div>
  );
}



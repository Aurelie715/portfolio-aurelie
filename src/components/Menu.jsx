import React from "react";
import styles from "./Menu.module.scss";
import Button from "./Button";
import Link from "next/link";

export default function Menu({ onItemClick }) {
  return (
    <nav className={styles.menu}>
      <p>FR - EN</p>
      <ul>
        <li>
          <Link className={styles.link} href="/" onClick={onItemClick}>
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/portfolio" onClick={onItemClick}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about" onClick={onItemClick}>
            A PROPOS
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/contact" onClick={onItemClick}>
            CONTACT
          </Link>
        </li>
      </ul>
      <Button
        url="/images/Aurelie_BERNARD_CV2023.pdf"
        text="Télécharger mon cv"
        target="_blank"
      />
    </nav>
  );
}

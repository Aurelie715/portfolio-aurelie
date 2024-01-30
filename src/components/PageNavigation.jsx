import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PageNavigation.module.scss";

const PageNavigation = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${`link ${
              pathname === "/" ? "active" : ""
            }`}`}
          >
            ACCUEIL
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className={styles.link}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            A PROPOS
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PageNavigation;

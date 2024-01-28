import React from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

export default function button({ text, url, target }) {
  return (
    <a
      className={styles.link}
      href={url}
      target={target}
      // rel="noopener noreferrer"
      download
    >
      {text}
    </a>
  );
}

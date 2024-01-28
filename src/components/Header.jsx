import React, { useState } from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";

function MenuBtn({ onClick, isOpen }) {
  return (
    <div className={styles["menu-btn"]} onClick={onClick}>
      <div className={isOpen ? styles.open : ""}></div>
      <div className={isOpen ? styles.open : ""}></div>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid-area-header">
      <header className={isOpen ? styles["header-container"] : ""}>
        <div className={styles.header}>
          <p className={styles.name}>Aurélie BERNARD</p>
          <MenuBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen ? <Menu onItemClick={() => setIsOpen(false)} /> : null}
      </header>
    </div>
  );
}

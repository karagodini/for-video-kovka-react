import React from "react";
import styles from "./leftmenu.css";
import { Link } from "react-router-dom";

export function LeftMenu() {
  return (
    <div
      className={styles.mainContainer}
      style={{
        backgroundImage: `url(/images/imagesForNavesKovka/IMG_6210.JPG)`,
      }}
    >
      <div className={styles.menu}>
        <Link to="/canopies" className={styles.link}>
          <p className={styles.itemMenu}>Навесы</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/gates" className={styles.link}>
          <p className={styles.itemMenu}>Ворота</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/gratings" className={styles.link}>
          <p className={styles.itemMenu}>Решетки</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/stairs" className={styles.link}>
          <p className={styles.itemMenu}>Лестницы</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/railing" className={styles.link}>
          <p className={styles.itemMenu}>Перила</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/fence" className={styles.link}>
          <p className={styles.itemMenu}>Заборы</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/alcove" className={styles.link}>
          <p className={styles.itemMenu}>Беседки</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/benches" className={styles.link}>
          <p className={styles.itemMenu}>Скамейки</p>
        </Link>
        <hr className={styles.line} />
        <Link to="/benches" className={styles.link}>
          <p className={styles.itemMenu}>Оградки</p>
        </Link>
        <hr className={styles.line} />
      </div>
    </div>
  );
}

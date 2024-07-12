import React from "react";
import styles from "./catalogcard.css";

interface ICatalogCard {
  name: string;
  path: string;
}

export function CatalogCard({ name, path }: ICatalogCard) {
  const imagePath = `/images/${path}`;
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.center}>
        <h2 className={styles.nameItem}>{name}</h2>
        <div className={styles.more}>
          <p>Подробнее</p>
        </div>
        <hr className={styles.line} />
      </div>
    </div>
  );
}

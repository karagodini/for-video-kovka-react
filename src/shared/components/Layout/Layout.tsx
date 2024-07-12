import React from "react";
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
  header: string;
}

export function Layout({ header, children }: ILayoutProps) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.namePage}>{header}</h1>
      </div>
      <div className={styles.gridImages}>{children}</div>
    </div>
  );
}

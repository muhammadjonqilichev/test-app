import React from "react";
import styles from "./InfoPart.module.scss";

export const InfoPart = () => {
  return (
    <div className={styles.infoPart}>
      <h2 className={styles.infoTitle}>Information about app</h2>
      <div className={styles.infoBlockFirst}>
        <div className={styles.inFirstBlock}>
          <h4 className={styles.firstBlockTitle}>Title about part 1</h4>
          <p className={styles.firstBlockDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod amet, consectetur adipiscing elit, sed do eiusmod amet,
            consectetur adipiscing elit, sed do eiusmod amet, consectetur
            adipiscing elit, sed do eiusmodamet, consectetur adipiscing elit,
            sed do eiusmod
          </p>
        </div>
        <span className={styles.firstBlockLogo}>LOGO</span>
      </div>
      <div className={styles.infoBlockSecond}>
      <span className={styles.secondBlockLogo}>LOGO</span>
        <div className={styles.inSecondBlock}>
          <h4 className={styles.secondBlockTitle}>Title about part 2</h4>
          <p className={styles.secondBlockDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod amet, consectetur adipiscing elit, sed do eiusmod amet,
            consectetur adipiscing elit, sed do eiusmod amet, consectetur
            adipiscing elit, sed do eiusmodamet, consectetur adipiscing elit,
            sed do eiusmod
          </p>
        </div>
      </div>
    </div>
  );
};

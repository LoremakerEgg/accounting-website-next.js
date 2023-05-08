"use client";

import { useState } from "react";
import styles from "./quasar.module.scss";

export default function Quasar() {
  const [mainNumber, setMainNumber] = useState(0);
  const [payout, setPayout] = useState(0);
  const [credits, setCredits] = useState(200);

  const clickFourSeven = () => {
    const randomFourSeven = Math.floor(Math.random() * 4) + 4;
    setMainNumber(mainNumber + randomFourSeven);
  };

  const clickOneEight = () => {
    const randomOneEight = Math.floor(Math.random() * 8) + 1;
    setMainNumber(mainNumber + randomOneEight);
  };

  const clickPayOut = () => {
    if (mainNumber === 17) {
      setPayout(200);
    } else if (mainNumber === 18) {
      setPayout(250);
    } else if (mainNumber === 19) {
      setPayout(300);
    } else if (mainNumber === 20) {
      setPayout(400);
    }
    setMainNumber(0);
    setCredits(credits + payout);
  };

  const creditPayout = () => {
    console.log(credits);
    return payout;
  };

  const creditAccount = () => {
    return credits;
  };

  return (
    <main className={styles.main}>
      <div className={styles.divGame}>
        <h1 className={styles.number}>{mainNumber}</h1>
        <div className={styles.buttonDiv}>
          <button onClick={clickOneEight} className={styles.button}>
            Add 1 - 8
          </button>
          <button onClick={clickPayOut} className={styles.button}>
            Pay Out
          </button>
          <button onClick={clickFourSeven} className={styles.button}>
            Add 4 - 7
          </button>
        </div>
      </div>
      <div>
        <h2>Payout: {creditPayout()}</h2>
      </div>
      <div>
        <h3>Credits: {creditAccount()} </h3>
      </div>
    </main>
  );
}

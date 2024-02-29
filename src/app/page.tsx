"use client";

import styles from "./page.module.css";

import animationData from "./animation.json";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <main className={styles.main}>
      <Suspense>
        <Lottie animationData={animationData} style={{
          height: 300,
          width: 300
        }} />
      </Suspense>
    </main>
  );
}

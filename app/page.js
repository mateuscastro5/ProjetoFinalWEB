"use client";

import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fit Flex</title>
        <meta name="description" content="Fit Flex - Seu aliado na saúde" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>FIT FLEX</h1>
          <h2 className={styles.subtitle}>SEU ALIADO NA SAUDE</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
          <a href="#" className={styles.ctaButton}>DESCUBRA MAIS +</a>
        </div>
      </main>
    </div>
  );
}

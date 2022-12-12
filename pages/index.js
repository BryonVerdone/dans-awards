import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import AwardsGrid from '../components/Awards-grid';
export default function Home() {
  return (
    <>
      <Hero />
      <AwardsGrid />
    </>
  );
}

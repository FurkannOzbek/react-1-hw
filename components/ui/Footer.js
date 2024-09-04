"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMedieItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/about_us"> About Us</Link>
          </li>
          <li>
            <Link href="/destination"> Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration"> NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/icons/facebook.png"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/icons/instagram.webp"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://tiktok.com"
            title="TikTok"
            icon="/icons/tiktok.webp"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://linkedin.com"
            title="LinkedIn"
            icon="/icons/linkedin.webp"
          ></SocialMediaItem>
          <SocialMediaItem
            url="https://google.com"
            title="On the Streets at night"
            icon="/icons/google.png"
          ></SocialMediaItem>
        </ul>
      </div>
    </footer>
  );
};

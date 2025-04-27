"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const links = [
    {
      id: 1,
      link: "/contact",
      title: "Contact Us",
    },
    {
      id: 2,
      link: "/about-us",
      title: "About Us",
    },
  ];

  function handleChange(e) {
    const selectedLink = e.target.value;
    if (selectedLink) {
      router.push(selectedLink);
    }
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navSection}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/logo-brian.png"
              alt="Builder logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
      <div className={styles.navSection}>
        <div
          className={styles.linksContainer}
          onClick={() => setShowLinks(!showLinks)}
        >
          <p>Links</p>
          <span>
            <MdOutlineKeyboardArrowDown
              className={`${showLinks ? styles.rotate : ""}`}
            />
          </span>
        </div>

        <div
          className={`${styles.dropdown} ${showLinks ? styles.translate : ""}`}
        >
          <div
            className={styles.dropItem}
            onClick={() => setShowLinks(!showLinks)}
          >
            <Link href="/contact">
              <p>Contact Us</p>
            </Link>
          </div>
          <div
            className={styles.dropItem}
            onClick={() => setShowLinks(!showLinks)}
          >
            <Link href="/about-us">
              <p>About Us</p>
            </Link>
          </div>
          <div
            className={styles.dropItem}
            onClick={() => setShowLinks(!showLinks)}
          >
            <Link href="/gallery">
              <p>Gallery</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.navSection}>
        <p>Call Us</p>
        <p>04---------</p>
      </div>
    </nav>
  );
}

export default Navbar;

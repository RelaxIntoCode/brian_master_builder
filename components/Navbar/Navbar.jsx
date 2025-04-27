"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
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
        <div className={styles.navLink}>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? styles.active : ""}
          >
            About Us
          </Link>
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

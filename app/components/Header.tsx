"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.title}>
          <Link
            href="/"
            className={pathname == "/" ? "myLinkActive" : "myLink"}
          >
            TITLE GOES HERE
          </Link>
        </div>
        <div className={styles.links}>
          <Link
            href="/about"
            className={pathname == "/about" ? "myLinkActive" : "myLink"}
          >
            Om mig
          </Link>
          <Link
            href="/pricing"
            className={pathname == "/pricing" ? "myLinkActive" : "myLink"}
          >
            Priser
          </Link>
          <Link
            href="/contact"
            className={pathname == "/contact" ? "myLinkActive" : "myLink"}
          >
            Kontakta mig
          </Link>
          <Link
            href="/quasar"
            className={pathname == "/quasar" ? "myLinkActive" : "myLink"}
          >
            Quasar
          </Link>
          <Link
            href="/guesswho"
            className={pathname == "/guesswho" ? "myLinkActive" : "myLink"}
          >
            Guess Who
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

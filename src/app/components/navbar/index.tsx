import { authorization } from "@/app/actions";
import Link from "next/link";
import LoginButton from "./login-button";
import styles from "./styles.module.css";

export default async function Navbar() {
  const { loggedIn } = await authorization();

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">Beautiful Website</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/post/create">Create Post</Link>
          </li>
          <LoginButton loggedIn={loggedIn} />
        </ul>
      </div>
    </nav>
  );
}

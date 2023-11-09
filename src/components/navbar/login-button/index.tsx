import { logout } from "@/app/actions";
import { headers } from "next/headers";
import Link from "next/link";
import styles from './styles.module.css';


export default function LoginButton({ loggedIn }: {
  loggedIn: boolean
}) {
  const pathname = headers().get('next-url')

  if (loggedIn) {
    return (
      <li>
        <form action={logout}>
          <button className={styles.loginButton}>Logout</button>
        </form>
      </li>
    )
  }
  return (
    <li>
      <Link href={"/login?url=" + pathname}>Login</Link>
    </li>
  )
}
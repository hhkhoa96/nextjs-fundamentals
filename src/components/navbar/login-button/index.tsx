import { logout } from "@/app/actions";
import { headers } from "next/headers";
import Link from "next/link";


export default function LoginButton({ loggedIn }: {
  loggedIn: boolean
}) {
  const pathname = headers().get('next-url')

  if (loggedIn) {
    return (
      <form action={logout}>
        <button>Logout</button>
      </form>
    )
  }
  return (
    <li>
      <Link href={"/login?url=" + pathname}>Login</Link>
    </li>
  )
}
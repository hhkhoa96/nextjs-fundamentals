import { authorization } from "@/app/actions";
import Link from "next/link";
import CreatePost from "./login-button";
import LoginButton from "./login-button";


export default async function Navbar() {
  const { loggedIn } = await authorization();

  return (
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            Menu <i className="fa fa-bars"></i>
          </button>
          <Link className="navbar-brand" href="/">
            Start Bootstrap
          </Link>
        </div>

        <div
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
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
      </div>
    </nav>
  )
}

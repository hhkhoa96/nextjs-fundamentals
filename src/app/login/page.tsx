"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/app/actions";
import styles from "./styles.module.css";

export default function Login({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return (
    <form
      className={styles.login}
      action={(payload) => login(payload, searchParams)}
    >
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" className={`btn btn-primary ${styles.submit}`}>
        Sign in
      </button>
    </form>
  );
}

"use server";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import jwt, { Jwt } from "jsonwebtoken";

enum Headers {
  Authorization = "Authorization",
}

const jwtSalt = "private key";

export async function login(
  formData: FormData,
  searchParams: Record<string, string>
) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email && password) {
    const token = jwt.sign(email, jwtSalt);
    cookies().set(Headers.Authorization, token);
    const redirectURL = searchParams["url"] || "/";
    redirect(redirectURL);
  } else {
    return {
      message: "Failed",
    };
  }
}

export async function authorization() {
  const value = cookies().get(Headers.Authorization)?.value || "";

  try {
    jwt.verify(value, jwtSalt) as jwt.JwtPayload;
    return {
      loggedIn: true,
    };
  } catch (error) {
    return {
      loggedIn: false,
    };
  }
}

export async function checkAuthorization(pathname: string) {
  const { loggedIn } = await authorization();
  if (!loggedIn) {
    redirect('/login?url=' + pathname)
  }
}

export async function logout() {
  cookies().delete(Headers.Authorization);
}

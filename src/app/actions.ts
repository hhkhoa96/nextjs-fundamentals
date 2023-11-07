"use server";
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  console.log({ prevState });
  const email = formData.get("email");
  const password = formData.get("password");

  if (email && password) {
    redirect('/')
  } else {
    return {
      message: "Failed",
    };
  }
}

"use server";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function login(prevState: any, formData: FormData) {
  console.log({ prevState });
  const email = formData.get("email");
  const password = formData.get("password");

  if (email && password) {
    const token = 'random token'
    cookies().set('Authorization', token)
    redirect('/');
  } else {
    return {
      message: "Failed",
    };
  }
}

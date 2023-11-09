import { authorization } from "@/app/actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { loggedIn } = await authorization();
  if (!loggedIn) {
    return NextResponse.json({ message: 'Unauthorization' }, { status: 403 })
  }

  try {
    const formData = await request.formData()
    return NextResponse.json({
      message: 'success', data: {
        title: formData.get('title'),
        description: formData.get('description')
      }
    })
  } catch (error: any) {
    return NextResponse.json({ message: 'system error' }, { status: 500 })
  }
}
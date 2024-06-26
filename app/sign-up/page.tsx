"use client"
import { useSession, signOut } from "next-auth/react"
import { SignUpForm } from "@/components/custom/sign-up-form"
import { Suspense } from "react"

export default function SignUpPage() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="flex justify-center">
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    )
  }

  return (
    <Suspense>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <SignUpForm />
      </div>
    </Suspense>
  )
}

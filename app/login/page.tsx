import { LoginForm } from "@/components/custom/login-form"
import { Suspense } from "react"

export default function LoginPage() {
  return (
    <Suspense>
      <div className="z-10">
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="flex justify-center">
            {" "}
            <LoginForm />
          </div>
        </div>
      </div>
    </Suspense>
  )
}

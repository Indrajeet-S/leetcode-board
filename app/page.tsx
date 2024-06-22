import Link from "next/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import Image from "next/image"
import * as React from "react"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="container relative">
        <PageHeader>
          <PageHeaderHeading>LeetCode Board</PageHeaderHeading>
          <PageHeaderDescription>
            A Web App that allows any user to brainstorm problem ideas on a
            Whiteboard!
          </PageHeaderDescription>
          <PageActions>
            <Link href="/problems" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              rel="noreferrer"
              href="/community-communication"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Image
                src="/help_mark.png"
                alt="help"
                width={16}
                height={16}
                className="mr-[3px]"
              />
              Help
            </Link>
          </PageActions>
        </PageHeader>
      </div>
    </div>
  )
}

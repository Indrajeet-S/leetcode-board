"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Image from "next/image"
// import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <span className="hidden font-bold sm:inline-block">
          {/* {siteConfig.name} */}
          LC Board
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {/* <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link> */}
        <Link
          href="/problems"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/problems" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Problems
        </Link>
        <Link
          href="https://leetcode.com/contest/"
          target="_blank"
          className={cn(
            "transition-colors hover:text-foreground/80",
            "text-foreground/60"
          )}
        >
          Contest
        </Link>
        <Link
          href="/community-communication"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/community-communication"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Communicate
        </Link>
        <Link
          href="https://excalidraw.com/"
          target="_blank"
          className={cn(
            "transition-colors hover:text-foreground/80",
            "text-foreground/60"
          )}
        >
          Whiteboard
        </Link>
        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  )
}

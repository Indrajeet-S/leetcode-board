import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Mobile and Main navigation grouped together for better layout control on smaller screens */}
        <div className="flex items-center">
          <MobileNav />
          <MainNav />
        </div>
        {/* Mode toggle always aligned to the right */}
        <div className="flex items-center">
          <div className="mr-3">
            <Button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-1 px-3 rounded-lg">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
          <div>
            <Button variant="secondary">
              <Link href="/login">Login</Link>
            </Button>
          </div>
          <div className="mr-3">
            <Link
              href={siteConfig.links.discord}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.discord className="h-3 w-3 fill-current" />
                <span className="sr-only">Discord</span>
              </div>
            </Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

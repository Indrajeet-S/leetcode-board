import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";

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
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
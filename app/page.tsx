import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-white/25 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        {/* <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"> */}
        <div className="flex">
          <Button className="mr-4">Hello sir</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

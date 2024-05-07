import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex space-x-4 items-center p-4 border-2 border-gray-100 dark:border-gray-600 rounded shadow-md">
        {" "}
        <Button className="bg-green-400 hover:bg-green-700 text-black">
          Button
        </Button>
        <ModeToggle />
      </div>
    </main>
  );
}

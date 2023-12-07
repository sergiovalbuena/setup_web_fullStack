import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      Hello
      <Button>Button</Button>
      <Link href="/" className={buttonVariants()}>
        home page
      </Link>
      <ModeToggle />
    </main>
  );
}

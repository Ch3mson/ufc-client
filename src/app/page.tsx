import Image from "next/image";
import Hero from "@/components/hero";
import FighterInput from "@/components/compare";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 min-h-[calc(100vh-200px)]">
      <Hero />
      <FighterInput />
    </main>
  );
}

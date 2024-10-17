import Hero from "@/components/hero";
import FighterInput from "@/components/compare";

async function getLatestDate() {
  return new Date().toISOString().split('T')[0];
}

export default async function Home() {
  const latestDate = await getLatestDate();

  return (
    <main className="flex flex-col items-center justify-start px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 min-h-[calc(100vh-200px)]">
      <Hero latestDate={latestDate} />
      <FighterInput />
    </main>
  );
}
